import BN from "bn.js";

export function calculateGasMargin(value) {
    return new BN(value).mul(new BN(120)).div(new BN(100));
}
