import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";
import MetaMask from "./Metamask";
import CoinbasewalletIcon from "./CoinbasewalletIcon";
import WalletconnectIcon from "./WalletConnectIcon";

const rpcUrl = `https://polygon-mumbai.infura.io/v3/a57b980756b843539f4a23218a686291`;

const toHex = (num) => {
  const val = Number(num);
  return "0x" + val.toString(16);
};

const Injected = new InjectedConnector({});
const CoinbaseWallet = new WalletLinkConnector({
  url: rpcUrl,
  appName: "BOMCoin",
  supportedChainIds: [1, 3, 4, 5, 42],
});
const WalletConnect = new WalletConnectConnector({
  rpcUrl,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export default function WalletDialog({ isOpen, setIsOpen }) {
  const { active, account, activate, deactivate, library, chainId } =
    useWeb3React();

  const switchToPolygon = async () => {
    try {
      await library._provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(80001) }],
      });
    } catch (switchError) {
      console.error("switchError:", switchError);
      if (switchError.code === 4902) {
        try {
          await library._provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: toHex(80001),
                rpcUrls: [rpcUrl],
                chainName: "Polygon Testnet 4 Bom",
                nativeCurrency: { name: "BOMT", decimals: 18, symbol: "BOMT" },
                iconUrls: ["https://bomcoin.com/images/logo.png"],
              },
            ],
          });
        } catch (error) {
          console.error(error);
        }
      }
    }
  };

  const signin = async () => {
    const message = `Logging in at ${new Date().toISOString()}`;
    await library
      .getSigner(account)
      .signMessage(message)
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (active) {
      // signin();
    }
  }, [active]);

  useEffect(() => {
    if (active && library) {
      switchToPolygon();
    }
  }, [active, library]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setIsOpen(false)}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-0 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-40 bg-blue-900/100">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-white p-6 text-center bg-white/20"
              >
                Connect Wallet
              </Dialog.Title>
              <div className="grid grid-cols-2 p-6 gap-6 mt-0 bg-white">
                <button
                  className="text-blue-500 font-bold py-2 px-4 rounded flex flex-col justify-center items-center gap-2"
                  onClick={() => {
                    activate(Injected);
                    setIsOpen(false);
                  }}
                >
                  <MetaMask />
                  MetaMask
                </button>
                <button
                  className="text-blue-500 font-bold py-2 px-4 rounded flex flex-col justify-center items-center gap-2"
                  onClick={() => {
                    activate(CoinbaseWallet);
                    setIsOpen(false);
                  }}
                >
                  <CoinbasewalletIcon />
                  CoinbaseWallet
                </button>
                <button
                  className="text-blue-500 font-bold py-2 px-4 rounded flex flex-col justify-center items-center gap-2"
                  onClick={() => {
                    activate(WalletConnect);
                    setIsOpen(false);
                  }}
                >
                  <WalletconnectIcon />
                  WalletConnect
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
