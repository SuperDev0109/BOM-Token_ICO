import { BUSD_ADDRESS, USDC_ADDRESS, USDT_ADDRESS } from "./polygon-abis";

export const TokenList = [
  {
    name: "MATIC",
    address: "0x0000000000000000000000000000000000001010",
    symbol: "MATIC",
    decimals: 18,
  },
  {
    name: "BUSD",
    address: BUSD_ADDRESS,
    symbol: "BUSD",
    decimals: 6,
  },
  {
    name: "USDT",
    address: USDT_ADDRESS,
    symbol: "USDT",
    decimals: 6,
  },
  {
    name: "USDC",
    address: USDC_ADDRESS,
    symbol: "USDC",
    decimals: 6,
  },
];
