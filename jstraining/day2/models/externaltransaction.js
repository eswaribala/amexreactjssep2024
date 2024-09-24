import {Transaction} from "./transaction.js";

export class ExternalTransaction  extends Transaction{

    constructor(transactionNo,amount,dateOfTransaction,branchName, branchAddress, branchPostCode, branchCode) {
        super(transactionNo,amount,dateOfTransaction);
        this._branchName=branchName;
        this._branchAddress=branchAddress;
        this._branchPostCode=branchPostCode;
        this._branchCode=branchCode;

    }

}