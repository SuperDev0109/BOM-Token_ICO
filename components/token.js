import React, { useState, useCallback, useEffect } from "react";
import DropDown from "../components/DropDown";
import Web3 from "web3";
import { useWeb3React } from "@web3-react/core";
import { useBalance } from "../hooks";
import { TokenList } from "../assets/token-list-polygon.js";
import {
  getBOMICOContract,
  getTokenContract,
} from "../store/contractStore";
import { _info_BOMICO, _info_BOMNFT } from "../assets/BomContracts-polygon";
import BN from "bn.js";
import {applyDecimals, MaxUint256} from "../lib/utils/BigNumber";
import {useApprove} from "../lib/hooks/useApprove";
import WalletDialog from "./WalletDialog";

const ratio = 100000000000000000;

const calcRate = (coin) => {
  let rate = 1;

  if (coin.symbol === "MATIC") {
    rate = 0.3;
  } else {
    rate = 1;
  }

  return rate;
};

export default function Token() {
  const [selectedToken, setSelectedToken] = useState(TokenList[0]);
  const [isBOMFocused, setIsBOMFocused] = React.useState(true);

  const { active, account, activate, deactivate, library, chainId } =
    useWeb3React();

  const [balance] = useBalance(selectedToken.address, selectedToken.decimals);

  const [fromAddress, setFromAddress] = useState("");
  const [web3, setWeb3] = useState();

  const [pay_amount, setPayAmount] = useState(0);
  const [buy_amount, setBuyAmount] = useState(0);
  const [rate, setRate] = useState(1);

  const handleInvest = async (pay_amount_wei, cost_value, token_id) => {
    console.log("Handle Invest", pay_amount_wei.toString(), cost_value, token_id);
    const icoContract = getBOMICOContract(library);
    const investResult = await new Promise((resolve) => {
      icoContract?.methods
      .invest(pay_amount_wei, token_id)
      .send({from: account, value: cost_value})
      .then((bomTokenAmount) => {
        console.log("[TROICA] OKOK ", bomTokenAmount);
        return resolve(bomTokenAmount);
      })
      .catch((error) => {
        console.log("[Troica]", error);
        return resolve(-1);
      });
    });
    return investResult;
  }

  // SWAP TOKEN
  const swapToken = async () => {
    console.log("Swap:", pay_amount, buy_amount, balance);

    // Call Token contract to Approve
    if(selectedToken.id > 0) {
      const pay_amount_wei = applyDecimals(pay_amount, selectedToken.decimals);
      const token_contract = getTokenContract(library, selectedToken);
      const isApproved = await useApprove(token_contract, account, pay_amount_wei);
      if (isApproved == false) {
        console.log("[SP] Not approved");
        return;
      }
    }
    // Calcualte Eth Amount to Send
    let cost_value = 0;
    if (selectedToken.id == 0) {
      cost_value = applyDecimals(pay_amount, selectedToken.decimals);
    }

    // Call ICO contract to Invest
    const pay_amount_wei = applyDecimals(pay_amount, _info_BOMICO.decimals);
    const investResult = await handleInvest(pay_amount_wei, cost_value, selectedToken.id);
    console.log("[TROICA] investResult = ", investResult);
  };

  useEffect(() => {
    setWeb3(new Web3(window.ethereum));
  }, []);

  useEffect(() => {
    setRate(calcRate(selectedToken));
  }, [selectedToken]);

  useEffect(() => {
    if(isBOMFocused) return;
    if (buy_amount * ratio * rate != pay_amount * ratio) {
      setBuyAmount((pay_amount * ratio) / (rate * ratio));
    }
  }, [pay_amount]);

  useEffect(() => {
    if(!isBOMFocused) return;
    if (buy_amount * ratio * rate !== pay_amount * ratio) {
      setPayAmount((buy_amount * ratio * rate) / ratio);
    }
  }, [buy_amount]);

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
            onFocus = {isBOMFocused}
            onChange={(e) => {
              setBuyAmount(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div>Rate</div>
        <div>{rate} USDT / BOM</div>
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
