import BigNumber from "bignumber.js";

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    return false;
  }
};

export function web3BNToFloatString(
  bn,
  divideBy,
  decimals,
  roundingMode = BigNumber.ROUND_DOWN
) {
  const converted = new BigNumber(bn.toString());
  const divided = converted.div(divideBy);
  return divided.toFixed(decimals, roundingMode);
}
