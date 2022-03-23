import React, { useEffect, useState } from "react";

export const isMetaMaskInstalled = () => {
  if (typeof window === "object") {
    return Boolean(window.ethereum);
  } else {
    return false;
  }
};

export const readAddress = async () => {
  if (typeof window === "object") {
    return await window.ethereum.request({ method: "eth_requestAccounts" });
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

  const switchWallet = async () => {
    const selectedAddress = await readAddress();

    if (selectedAddress) {
      setAddress(selectedAddress);
    } else {
    }
    onChange(selectedAddress);
  };

  useEffect(() => {
    const eventName = `accountsChanged`;

    if (!isMetaMaskInstalled()) {
      return;
    }

    const listener = ([selectedAddress]) => {
      setAddress(selectedAddress);
      onChange(selectedAddress);
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

  if (!isMetaMaskInstalled()) {
    return <>No wallet found. Please install MetaMask.</>;
  }

  if (address) {
    return <button>Connected with {address}</button>;
  }

  return (
    <button className="btn-primary w-full" onClick={switchWallet}>
      Connect Wallet
    </button>
  );
};

export default MetaMaskConnect;
