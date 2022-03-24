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
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  } else {
    return null;
  }
};

export const readSign = async (account) => {
  if (typeof window === "object") {
    const message = "Hello";
    return await window.ethereum.request({
      method: "personal_sign",
      params: [message, account],
    });
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

  const switchWallet = async () => {
    const selectedAddress = await readAddress();
    const sign = await readSign(selectedAddress);
    if (selectedAddress) setAddress(selectedAddress);
    if (sign) setSign(sign);

    onChange(selectedAddress, sign);
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
    return <div>No wallet found. Please install MetaMask.</div>;
  }

  if (address) {
    return <div>Connected with {address}</div>;
  }

  return (
    <div className="btn-primary w-full" onClick={switchWallet}>
      Connect Wallet
    </div>
  );
};

export default MetaMaskConnect;
