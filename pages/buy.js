import React, { useState, useCallback, useEffect } from "react";
import MetaMaskConnect from "../components/MetaMaskConnect";
import DropDown from "../components/DropDown";

const coins = ["USDC", "USDT", "MATIC"];

const calcRate = (coin) => {
  let rate = 1;

  if (coin === "USDC" || coin === "USDT") {
    rate = 0.3;
  } else if (coin === "MATIC") {
    rate = 0.5;
  }

  return rate;
};

export default function Buy() {
  const [fromAddress, setFromAddress] = useState("");
  const [sign, setSign] = useState("");
  const [ethBalance, setEthBalance] = useState(0);

  const addressChanged = useCallback((address, sign) => {
    setFromAddress(address);
    setSign(sign);
  }, []);

  const [pay_amount, setPayAmount] = useState(0);
  const [buy_amount, setBuyAmount] = useState(0);
  const [current_coin, setCurrentCoin] = useState(coins[0]);
  const [rate, setRate] = useState(1);

  const handleGetBalance = async () => {
    const balance = await window.ethereum.request({
      method: "eth_getBalance",
      params: [fromAddress, "latest"],
    });
    const wei = parseInt(balance, 16);
    const gwei = wei / Math.pow(10, 9);
    const eth = wei / Math.pow(10, 18);
    setEthBalance(eth);
  };

  const convertFloat2Hex = (amount) => {
    const amountHex = (amount * Math.pow(10, 18)).toString(16);
    return amountHex;
  };

  const metaMaskPay = async () => {
    const hexAmount = convertFloat2Hex(pay_amount);
    await handleGetBalance();
    if (ethBalance < hexAmount) {
      console.log("Balance is less than send amount:", ethBalance, hexAmount);
      return;
    }
    console.log("Balance is enough than send amount:", ethBalance, hexAmount);
    try {
      const params = [
        {
          from: fromAddress,
          to: "0x4C8fb98D57D2eC4b9AED38f169f42386B011c5E3",
          gas: "0x76c0",
          value: hexAmount,
        },
      ];
      const transactionHash = await ethereum.request({
        method: "eth_sendTransaction",
        params,
      });
      console.log("send result:", transactionHash);
    } catch (error) {
      console.error("send exception:", error);
    }
  };

  const giveUSDT = async () => {
    // const Web3 = require('web3')
    // const Tx = require('ethereumjs-tx').Transaction
    // const Web3js = new Web3(new Web3.providers.HttpProvider('https://polygon-mainnet.infura.io/v3/key%27))
    // let tokenAddress = '0x' // HST contract address
    // let toAddress = '0x' // where to send it
    // let fromAddress = '0x' // your wallet
    // let privateKey = Buffer.from('key', 'hex')
    // let contractABI = [
    //   {
    //     'constant': false,
    //     'inputs': [
    //       {
    //         'name': '_to',
    //         'type': 'address'
    //       },
    //       {
    //         'name': '_value',
    //         'type': 'uint256'
    //       }
    //     ],
    //     'name': 'transfer',
    //     'outputs': [
    //       {
    //         'name': '',
    //         'type': 'bool'
    //       }
    //     ],
    //     'type': 'function'
    //   }
    // ]
    // let contract = new Web3js.eth.Contract(contractABI, tokenAddress, {from: fromAddress})
    // let amount = Web3js.utils.toHex(1e18)
    // Web3js.eth.getTransactionCount(fromAddress)
    //   .then((count) => {
    //     let rawTransaction = {
    //       'from': fromAddress,
    //       'gasPrice': Web3js.utils.toHex(20 * 1e9),
    //       'gasLimit': Web3js.utils.toHex(210000),
    //       'to': tokenAddress,
    //       'value': 0x0,
    //       'data': contract.methods.transfer(toAddress, amount).encodeABI(),
    //       'nonce': Web3js.utils.toHex(count)
    //     }
    //     let transaction = new Tx(rawTransaction)
    //     transaction.sign(privateKey)
    //     Web3js.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'))
    //       .on('transactionHash', console.log)
    //   })
  };

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
    <div className="font-sans antialiased bg-grey-lightest">
      <div className="w-full bg-grey-lightest">
        <div className="container mx-auto py-8">
          <div className="w-5/6 lg:w-1/2 mx-auto rounded shadow">
            <MetaMaskConnect onChange={addressChanged} />
            <div>balance:{ethBalance}</div>
            <div className="py-4 px-8 text-white text-4xl font-bold text-center">
              Buy
            </div>
            <div className="flex flex-col gap-4">
              <DropDown
                data={coins}
                value={current_coin}
                setValue={setCurrentCoin}
              />
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
            <div className="flex flex-col gap-4">
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
              <button className="btn-primary w-full" onClick={metaMaskPay}>
                Pay
              </button>
              <button className="btn-primary w-full" onClick={giveUSDT}>
                Give USDT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
