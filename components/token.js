import React, { useState, useCallback, useEffect } from "react";
import DropDown from "../components/DropDown";
import Web3 from "web3";
import { tokenAddresses } from "../config/tokens";
import { tokenABI } from "../config/token_abis";
import { useWeb3React } from "@web3-react/core";
import { useBalance } from "../hooks";
import { TokenList } from "../assets/token-list-polygon.js";
import {
  getBOMICOContract,
  getBUSDContract,
  getUSDCContract,
} from "../store/contractStore";
import { BUSD_ADDRESS, USDT_ADDRESS } from "../assets/polygon-abis";
import WalletDialog from "./WalletDialog";

const ratio = 100000000000000000;

const calcRate = (coin) => {
  let rate = 1;

  if (coin.symbol === "USDC" || coin.symbol === "USDT") {
    rate = 0.3;
  } else if (coin.symbol === "MATIC") {
    rate = 0.5;
  }

  return rate;
};

export default function Token() {
  const [selectedToken, setSelectedToken] = useState(TokenList[0]);

  const { active, account, activate, deactivate, library, chainId } =
    useWeb3React();

  const [balance] = useBalance(selectedToken.address, selectedToken.decimals);

  const [fromAddress, setFromAddress] = useState("");
  const [web3, setWeb3] = useState();

  const [pay_amount, setPayAmount] = useState(0);
  const [buy_amount, setBuyAmount] = useState(0);
  const [rate, setRate] = useState(1);

  const swapToken = async () => {
    console.log("Swap:", pay_amount, buy_amount, balance);

    const contract = getBOMICOContract(library);
    console.log("[Troica] Started");

    if (selectedToken.symbol === "MATIC") {
      // await contract.methods
      //   .payToMint(title, description)
      //   .send({ from: buyer, value: cost });
    } else {
      if (selectedToken.symbol === "BUSD") {
        const busd_contract = getBUSDContract(library);
        busd_contract?.methods.approve(BUSD_ADDRESS, pay_amount);
      } else if (selectedToken.symbol === "USDT") {
        const usdt_contract = getUSDCContract(library);
        usdt_contract?.methods.approve(USDT_ADDRESS, pay_amount);
      } else if (selectedToken.symbol === "USDC") {
        const usdc_contract = getUSDCContract(library);
        usdc_contract?.methods.approve(USDC_ADDRESS, pay_amount);
      }

      contract?.methods
        .invest(pay_amount, token_id)
        .call()
        .then((bomTokenAmount) => {
          console.log("[TROICA] OKOK ", bomTokenAmount);
        })
        .catch((error) => {
          console.log("[Troica]", error);
        });
      console.log("[Troica] Ended");
    }
  };

  useEffect(() => {
    setWeb3(new Web3(window.ethereum));
  }, []);

  useEffect(() => {
    setRate(calcRate(selectedToken));
  }, [selectedToken]);

  useEffect(() => {
    if (buy_amount * ratio * rate !== pay_amount * ratio) {
      setPayAmount((buy_amount * ratio * rate) / ratio);
    }
  }, [buy_amount]);

  useEffect(() => {
    if (buy_amount * ratio * rate != pay_amount * ratio) {
      setBuyAmount((pay_amount * ratio) / (rate * ratio));
    }
  }, [pay_amount]);

  let [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <WalletDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center mb-4">
          <DropDown
            data={TokenList}
            value={selectedToken}
            setValue={setSelectedToken}
          />
          <div className="">{balance}</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div>BALANCE</div>
        <div className="field-input">
          <input
            className="w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
            type="number"
            min={0}
            max={balance}
            value={pay_amount}
            onChange={(e) => {
              setPayAmount(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div>BOM</div>
        <div className="field-input">
          <input
            className="w-full text-20 p-2 pr-4 pl-4 font-poppins bg-white/20 text-white rounded-md"
            type="number"
            min={0}
            value={buy_amount}
            onChange={(e) => {
              setBuyAmount(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>Rate</div>
        <div>{rate}USDT / 1BOM</div>
      </div>
      <div className="grid-cols-1 grid gap-4 mt-4">
        {active && (
          <button className="btn-primary w-full" onClick={swapToken}>
            Swap
          </button>
        )}
        {!active && (
          <button
            className="btn-primary w-full"
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}
