export const _info_BOMICO = {
  name: "BOM ICO",
  address: "0x04b5Ed7B46b911b9dFCBD5b47f525eE5034AFda4",
  decimals: 10,
  abi: [
    {
      inputs: [
        { internalType: "uint256", name: "amount", type: "uint256" },
        { internalType: "uint256", name: "id", type: "uint256" },
      ],
      name: "invest",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [{ internalType: "uint256", name: "roundid", type: "uint256" }],
      name: "getTokenPrice",
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getCurrentPrice", // GET Matice Price
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
  ],
};

export const _info_BOMNFT = {
  name: "BOM NFT",
  address: "0x8d495779B45301e9613CDdC60bdc13900c223C0B ",
  decimals: 10,
  abi: [
    {
      inputs: [],
      name: "getCurrentPrice", // GET Matice Price
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "usdCost", // Get USD Price of BOM NFT
      outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        { internalType: "string", name: "_tokenURI", type: "string" },
        { internalType: "uint256", name: "id", type: "uint256" },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        { internalType: "uint256", name: "_count", type: "uint256" },
        { internalType: "string", name: "_tokenURI", type: "string" },
        { internalType: "uint256", name: "id", type: "uint256" },
      ],
      name: "mintNFTs",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
  ],
};
