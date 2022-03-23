import React, { useState, useCallback, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import MetaMaskConnect, {
  isMetaMaskInstalled,
} from "../components/MetaMaskConnect";
import DropDown from "../components/DropDown";

const MySwal = withReactContent(Swal);

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
  const [fromAddress, setFromAddress] = useState(
    "0x68b1dc8d168c0b0edc2000e0ee73c71e105b00c0"
  );
  const [toAddress, setToAddress] = useState(
    "0x4C8fb98D57D2eC4b9AED38f169f42386B011c5E3"
  );

  const addressChanged = useCallback((address) => {
    setFromAddress(address);
  }, []);

  const [pay_amount, setPayAmount] = useState(0);
  const [buy_amount, setBuyAmount] = useState(0);
  const [current_coin, setCurrentCoin] = useState(coins[0]);
  const [rate, setRate] = useState(1);

  const metaMaskPay = async () => {
    try {
      const params = [
        {
          from: "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
          to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
          gas: "0x76c0", // 30400
          gasPrice: "0x9184e72a000", // 10000000000000
          value: "0x9184e72a", // 2441406250
          data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
