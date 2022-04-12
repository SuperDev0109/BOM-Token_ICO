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
import { BUSD_ADDRESS } from "../assets/polygon-abis";

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

  const handleGetTokenBalance = async (token_id) => {
    const eth_balance = await web3.eth.getBalance(fromAddress);

    setEthBalance(eth_balance);

    if (token_id == 0) {
      return eth_balance;
    }
    token_id -= 1;
    // *******************************
    // To Do
    // Check if token_id is valid
    if (token_id >= tokenAddresses.length) {
      console.log("ERROR: Invalid Token ID");
    }
    const token = tokenAddresses[token_id];
    const tokenInst = new web3.eth.Contract(tokenABI, token.address);
    let tokenBalance = await tokenInst.methods.balanceOf(fromAddress).call();
    const decimals = await tokenInst.methods.decimals().call();
    tokenBalance = tokenBalance / 10 ** decimals;
    return tokenBalance;
  };

  const handleTransfer = async (token_id, send_amount) => {
    const balance = await handleGetTokenBalance(token_id);
    console.log(balance);

    if (balance < send_amount) {
      console.log("Balance is less than send amount:", balance, pay_amount);
      return;
    }
    console.log("Balance is enough than send amount:", balance, pay_amount);

    if (token_id == 0) {
      return;
    }
    token_id -= 1;

    return;
  };

  const swapToken = async () => {
    console.log("Pay, Buy amount", pay_amount, buy_amount);
    // await handleTransfer(token_id, pay_amount);
    const contract = getBOMICOContract(library);
    console.log("[Troica] Started");

    if (selectedToken.symbol === "MATIC") {
    } else {
      if (selectedToken.symbol === "BUSD") {
        const busd_contract = getBUSDContract(library);
        busd_contract.approve(BUSD_ADDRESS, pay_amount);
      } else if (selectedToken.symbol === "USDT") {
        const usdt_contract = getUSDCContract(library);
        usdt_contract.approve(USDT_ADDRESS, pay_amount);
      } else if (selectedToken.symbol === "USDC") {
        const usdc_contract = getUSDCContract(library);
        usdc_contract.approve(USDC_ADDRESS, pay_amount);
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
    if (buy_amount * 100 * rate !== pay_amount * 100) {
      setPayAmount((buy_amount * 100 * rate) / 100);
    }
  }, [buy_amount]);

  useEffect(() => {
    if (buy_amount * 100 * rate != pay_amount * 100) {
      setBuyAmount((pay_amount * 100) / (rate * 100));
    }
  }, [pay_amount]);

  return (
    <div className="flex flex-col gap-4">
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
        <div>{rate} USDT per 1 BOM</div>
      </div>
      <div className="grid-cols-1 grid gap-4 mt-4">
        <button className="btn-primary w-full" onClick={swapToken}>
          Swap
        </button>
      </div>
    </div>
  );
}
