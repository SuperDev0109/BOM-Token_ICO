import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment, useState, useEffect } from "react";
import Button from "./Button";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";

import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWeb3React } from "@web3-react/core";

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

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Services", href: "#", current: false },
  { name: "Features", href: "#", current: false },
  { name: "Roadmap", href: "#", current: false },
  { name: "Tokenmics", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];

export default function Header() {
  const router = useRouter();
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    if (typeof window === "object") {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    }
  }, []);
  useEffect(() => {
    if (typeof window === "object") {
      let url = window.location.href.split("/");
      let target = url[url.length - 1].toLowerCase();
      let element = document.getElementById(target);
      element && element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  const [selectedNav, setSelectedNav] = useState(0);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { active, account, activate, deactivate, library, chainId } =
    useWeb3React();

  const switchToPolygon = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(80001) }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
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

  useEffect(() => {
    if (active && library) {
      console.log("Switching to Polygon...");
      switchToPolygon();
    }
  }, [active, library]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
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
              <Dialog.Overlay className="fixed inset-0" />
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Connect Wallet
                </Dialog.Title>
                <div className="flex flex-col gap-2 mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      activate(Injected);
                    }}
                  >
                    MetaMask
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      activate(CoinbaseWallet);
                    }}
                  >
                    CoinbaseWallet
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      activate(WalletConnect);
                    }}
                  >
                    WalletConnect
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <div className="min-h-full">
        <Disclosure
          as="nav"
          className={
            scroll
              ? "bg-grayM fixed top-0 left-0 right-0 z-full ease-in duration-100 z-10"
              : "z-10	md:bg-transparent bg-grayM relative md:absolute left-0 right-0 top-0 ease-in duration-100"
          }
        >
          {({ open }) => (
            <>
              <Disclosure.Button as="div">
                <span className="sr-only">Open main menu</span>
                {open && (
                  <span className="fixed top-0 bottom-0 w-full bg-transparent"></span>
                )}
              </Disclosure.Button>
              <div
                className={
                  scroll
                    ? "relativebg-grayM z-10 max-w-1400 mx-auto px-4 md:px-0 py-2 md:py-2 ease-in duration-100"
                    : "relative md:bg-transparent bg-grayM z-10 max-w-1400 mx-auto px-4 md:px-0 py-2 md:py-6 ease-in duration-100"
                }
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className={
                          scroll
                            ? "w-8 md:w-10 ease-in duration-100 cursor-pointer"
                            : "w-10 md:w-16 ease-in duration-100 cursor-pointer"
                        }
                        src={"/images/logo.png"}
                        alt="Bom"
                        onClick={() => router.push("/")}
                      />
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4 font-roboto">
                          {navigation.map((item, index) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={`main-nav px-3 py-2 rounded-md text-sm font-medium ${
                                index === selectedNav
                                  ? "text-blMenu nav-active"
                                  : "text-white hover:text-blMenu"
                              }`}
                              onClick={(e) => {
                                if (router.pathname === "/") {
                                  setSelectedNav(index);
                                  let hero = document.getElementById(item.name);
                                  e.preventDefault();
                                  hero &&
                                    hero.scrollIntoView({
                                      behavior: "smooth",
                                      block: "start",
                                    });
                                } else {
                                  router.push("/");
                                }
                              }}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                      <Button
                        title="Contact Us"
                        onClick={() => {
                          router.push("/contact");
                        }}
                      />
                      <Button
                        title="Connect Wallet"
                        onClick={() => {
                          setIsOpen(true);
                        }}
                      />
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="bg-burgerClr focus-visible:outline-none inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-burgerClr focus:outline-non">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon
                          className="close block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <MenuIcon
                          className="open block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden bg-grayM z-10 fixed w-full">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`main-nav block px-3 py-2 rounded-md text-base font-medium ${
                        index === selectedNav
                          ? "text-blMenu nav-active"
                          : "text-white hover:text-blMenu"
                      }`}
                      onClick={(e) => {
                        setSelectedNav(index);
                        let hero = document.getElementById(item.name);
                        e.preventDefault();

                        hero &&
                          hero.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            top: 200,
                          });
                        if (typeof window === "object") {
                          window.history.pushState(
                            "scroll",
                            "scroll",
                            "/".item.name
                          );
                        }
                      }}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <Button
                    title="Contact Us"
                    onClick={() => {
                      router.push("/contact");
                    }}
                  />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
