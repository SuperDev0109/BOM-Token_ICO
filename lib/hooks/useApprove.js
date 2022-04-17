import {calculateGasMargin} from "../utils/calculateGasMargin";
import { _info_BOMICO, _info_BOMNFT } from "../../assets/BomContracts-polygon";
import BN from "bn.js";

export const useApprove = async (token_contract, account, pay_amount_wei) => {
    // Get Already Approved Amount
    const approvedAmount = await token_contract?.methods
        .allowance(account, _info_BOMICO.address)
        .call()
        .then((result) => {
        return new BN(result);
        })
        .catch((error) => {
        console.log("[handle Approve] Error :", error);
        return new BN(0);
        });
    console.log("Approved Amount", approvedAmount.toString(), pay_amount_wei.toString());
    if (approvedAmount >= pay_amount_wei) {
        console.log("Already Approved");
        return true;
    }
    if(approvedAmount > 0) {
        const isApproved = await requestApprove(token_contract, account, 0);
        if(!isApproved) return false;
    }
    const isApproved = await requestApprove(token_contract, account, MaxUint256);
    return isApproved;
}

export const requestApprove = async (token_contract, account, amount) => {
    console.log("Approve to -> ", amount.toString());
    // Estimate Gas limit
    const estimatedGas = await token_contract?.methods
    .approve(_info_BOMICO.address, amount)
    .estimateGas({ from: account })
    .then((result) => {
        return result;
    })
    .catch((error)=> {
        console.log(error);
        return 300000;
    });

    console.log("Estimated Gas:", calculateGasMargin(estimatedGas).toString());
    // Request Approved
    const isApproved = await new Promise((resolve) => {
        token_contract?.methods
        .approve(_info_BOMICO.address, amount)
        .send({
        from: account, 
        gas: calculateGasMargin(estimatedGas),
        })
        .then((result) => {
        console.log("[SP] Approved Result = ", result);
        return resolve(true);
        })
        .catch((error) => {
        console.log("[SP]", error);
        return resolve(false);
        });
    });
    return isApproved;
}