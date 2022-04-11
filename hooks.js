import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";
import { ZERO_ADDRESS, web3BNToFloatString } from "./util";
import { getERC20Contract } from "./store/contractStore";
import BigNumber from "bignumber.js";
import BN from "bn.js";

export function useBalance(tokenAddress, decimals) {
  const [balance, setBalance] = useState("0");

  const { account, library } = useWeb3React();

  useEffect(() => {
    let isCancelled = false;

    function getBalance() {
      return new Promise((resolve) => {
        if (!library || !tokenAddress) {
          resolve(new BN("0"));
          return;
        }

        try {
          if (tokenAddress === ZERO_ADDRESS) {
            library.eth
              .getBalance(account)
              .then((value) => {
                resolve(new BN(value));
              })
              .catch((error) => {
                console.log(error);
                resolve(new BN("0"));
              });
          } else {
            const contract = getERC20Contract(tokenAddress, library);
            contract?.methods
              .balanceOf(account)
              .call()
              .then((value) => {
                resolve(new BN(value));
              })
              .catch((error) => {
                console.log(error);
                resolve(new BN("0"));
              });
          }
        } catch (error) {
          resolve(new BN("0"));
        }
      });
    }

    async function run() {
      const bn = await getBalance();
      if (!isCancelled) {
        const pow = new BigNumber("10").pow(new BigNumber(decimals));
        setBalance(web3BNToFloatString(bn, pow, 4, BigNumber.ROUND_DOWN));
      }
    }

    run();

    return () => {
      isCancelled = true;
    };
  }, [tokenAddress, library, decimals, account]);

  return [balance];
}

export function useBlockNumber() {
  const { library } = useWeb3React();
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    if (library) {
      const updateBlockNumber = (val) => setBlockNumber(val);
      library.on("block", updateBlockNumber);

      return () => {
        try {
          library.removeEventListener("block", updateBlockNumber);
        } catch (e) {
          console.error(e);
        }
      };
    }
  }, [library]);

  return blockNumber;
}
