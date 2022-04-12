import ERC20ABI from "../assets/abi-erc20.json";
import { _info_BOMICO, _info_BOMNFT } from "../assets/BomContracts-polygon";
import {
  BUSD_ABI,
  BUSD_ADDRESS,
  USDC_ABI,
  USDC_ADDRESS,
} from "../assets/polygon-abis";

export function getERC20Contract(tokenAddress, web3) {
  return web3
    ? new web3.eth.Contract(ERC20ABI, tokenAddress, {
        from: web3.eth.defaultAccount,
      })
    : null;
}

export function getBOMICOContract(web3) {
  return web3
    ? new web3.eth.Contract(_info_BOMICO.abi, _info_BOMICO.address, {
        from: web3.eth.defaultAccount,
      })
    : null;
}

export function getBOMNFTContract(web3) {
  return web3
    ? new web3.eth.Contract(_info_BOMNFT.abi, _info_BOMNFT.address, {
        from: web3.eth.defaultAccount,
      })
    : null;
}

export function getBUSDContract(web3) {
  return web3
    ? new web3.eth.Contract(BUSD_ABI, BUSD_ADDRESS, {
        from: web3.eth.defaultAccount,
      })
    : null;
}

export function getUSDTContract(web3) {
  return web3
    ? new web3.eth.Contract(USDC_ABI, USDC_ADDRESS, {
        from: web3.eth.defaultAccount,
      })
    : null;
}

export function getUSDCContract(web3) {
  return web3
    ? new web3.eth.Contract(USDC_ABI, USDC_ADDRESS, {
        from: web3.eth.defaultAccount,
      })
    : null;
}
