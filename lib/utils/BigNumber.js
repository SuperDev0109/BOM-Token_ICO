import BN from "bn.js";

export function applyDecimals(amount, decimals) {
    if (decimals <= 10) {
        return new BN(amount * 10 ** decimals);
    }
    return new BN(amount * 10 ** 10).mul(new BN(10).pow(new BN(decimals - 10)));
} 

export const MaxUint256 = new BN("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
