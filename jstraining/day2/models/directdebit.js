import {Transaction} from "./transaction.js";

export class DirectDebit extends Transaction{

    constructor(transactionNo,amount,dateOfTransaction,paymentDate) {
        super(transactionNo,amount,dateOfTransaction);
        this._paymentDate=paymentDate;

    }



}