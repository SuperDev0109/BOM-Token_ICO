import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { formatEther } from "@ethersproject/units";

export function useBalance() {
  const { account, library } = useWeb3React();
  const [balance, setBalance] = useState();

  useEffect(() => {
    if (account) {
      library.getBalance(account).then((val) => setBalance(val));
    }
  }, [account, library]);

  return balance ? `${formatEther(balance)} ETH` : null;
}

export function useBlockNumber() {
  const { library } = useWeb3React();
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    if (library) {
      const updateBlockNumber = (val) => setBlockNumber(val);
      library.on("block", updateBlockNumber);

      return () => {
        library.removeEventListener("block", updateBlockNumber);
      };
    }
  }, [library]);

  return blockNumber;
}
