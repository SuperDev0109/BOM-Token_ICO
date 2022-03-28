import React, { useEffect, useState } from "react";

export const isMetaMaskInstalled = () => {
  if (typeof window === "object") {
    return Boolean(window.ethereum);
  } else {
    return false;
  }
};

function getSelectedAddress() {
  if (typeof window === "object") {
    return window.ethereum?.selectedAddress;
  } else {
    return null;
  }
}

const MetaMaskConnect = ({ onChange }) => {
  const [address, setAddress] = useState(getSelectedAddress());
  const [sign, setSign] = useState();

  const readAddress = async () => {
    if (typeof window === "object") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      return true;
    } else {
      return false;
    }
  };

  const readSign = async (account) => {
    if (typeof window === "object") {
      const message = "Hello";
      const new_sign = await window.ethereum.request({
        method: "personal_sign",
        params: [message, account],
      });
      setSign(new_sign);
      return true;
    } else {
      return false;
    }
  };

  const ethEnabled = async () => {
    if (typeof window.ethereum !== "undefined") {
      // Instance web3 with the provided information from the MetaMask provider information
      // web3 = new Web3(window.ethereum);
      try {
        // Request account access
        await window.ethereum.enable();

        return true;
      } catch (e) {
        // User denied access
        return false;
      }
    }

    return false;
  };

  const switchWallet = async () => {
    if (await !ethEnabled()) {
      alert("Please install MetaMask to use this dApp!");
    }
    // Get selectedAddress & Sign from Metamask
    await readAddress();
  };

  useEffect(() => {
    const eventName = `accountsChanged`;
    if (!isMetaMaskInstalled()) {
      return;
    }

    const listener = ([selectedAddress]) => {
      setAddress(selectedAddress);
    };

    if (typeof window === "object") {
      window.ethereum.on(eventName, listener);
    }

    return () => {
      if (typeof window === "object") {
        window.ethereum.removeListener(eventName, listener);
      }
    };
  }, [onChange]);

  useEffect(() => {
    readSign();
  }, [address]);

  useEffect(() => {
    onChange(address, sign);
  }, [sign]);

  if (!isMetaMaskInstalled() && typeof window === "object") {
    return <div>No wallet found. Please install MetaMask.</div>;
  }
  return (
    <>
      {address && <div>Connected with {address}</div>}
      {!address && (
        <div
          className="bg-blue-500 px-4 py-2 float-right rounded-10"
          onClick={switchWallet}
        >
          Connect Wallet
        </div>
      )}
    </>
  );
};

export default MetaMaskConnect;
