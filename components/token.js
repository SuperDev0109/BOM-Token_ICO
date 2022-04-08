import React, { useState, useCallback, useEffect } from "react";
import MetaMaskConnect from "../components/MetaMaskConnect";
import DropDown from "../components/DropDown";
import Web3 from "web3";
import { tokenAddresses } from "../config/tokens";
import { tokenABI } from "../config/token_abis";
import { useWeb3React } from "@web3-react/core";
import { useBalance, useBlockNumber } from "../hooks";

const coins = ["MATIC", "USDC", "USDT"];

const calcRate = (coin) => {
  let rate = 1;

  if (coin === "USDC" || coin === "USDT") {
    rate = 0.3;
  } else if (coin === "MATIC") {
    rate = 0.5;
  }

  return rate;
};

export default function Token() {
  const { active, account, activate, deactivate, library, chainId } =
    useWeb3React();

  const balance = useBalance();
  const blockNumber = useBlockNumber();

  const [fromAddress, setFromAddress] = useState("");
  const [web3, setWeb3] = useState();

  const [pay_amount, setPayAmount] = useState(0);
  const [buy_amount, setBuyAmount] = useState(0);
  const [current_coin, setCurrentCoin] = useState(coins[0]);
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

  const metaMaskPay = async (token_id) => {
    await handleTransfer(token_id, pay_amount);

    // if (token_id === 0) {
    //   web3.eth.sendTransaction(
    //     {
    //       to: toAddress,
    //       value: web3.toWei(pay_amount, "ether"),
    //     },
    //     (err, transactionId) => {
    //       if (err) {
    //         console.log("Payment failed", err);
    //       } else {
    //         console.log("Payment successful", transactionId);
    //       }
    //     }
    //   );
    // } else {
    //   let privateKey = Buffer.from("key", "hex");
    //   const Tx = require("ethereumjs-tx").Transaction;

    //   const token = tokenAddresses[token_id];
    //   let tokenInst = new web3.eth.Contract(tokenABI, token.address, {
    //     from: fromAddress,
    //   });
    //   let amount = web3.utils.toHex(pay_amount);
    //   web3.eth.getTransactionCount(fromAddress).then((count) => {
    //     let rawTransaction = {
    //       from: fromAddress,
    //       gasPrice: web3.utils.toHex(20 * 1e9),
    //       gasLimit: web3.utils.toHex(210000),
    //       to: token.address,
    //       value: 0x0,
    //       data: tokenInst.methods.transfer(toAddress, amount).encodeABI(),
    //       nonce: web3.utils.toHex(count),
    //     };
    //     let transaction = new Tx(rawTransaction);
    //     transaction.sign(privateKey);
    //     web3.eth
    //       .sendSignedTransaction("0x" + transaction.serialize().toString("hex"))
    //       .on("transactionHash", console.log);
    //   });
    // }
  };

  useEffect(() => {
    setWeb3(new Web3(window.ethereum));
  }, []);

  useEffect(() => {
    setRate(calcRate(current_coin));
  }, [current_coin]);

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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center mb-1">
          <DropDown
            data={coins}
            value={current_coin}
            setValue={setCurrentCoin}
          />
          <div className="">{balance}</div>
        </div>
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
        <button className="btn-primary w-full" onClick={() => metaMaskPay(0)}>
          Pay
        </button>
      </div>
    </div>
  );
}
