export class Transaction{
    constructor(transactionNo,amount,dateOfTransaction) {

        this._transactionNo = transactionNo;
        this._amount = amount;
        this._dateOfTransaction = dateOfTransaction;
    }


    get transactionNo() {
        return this._transactionNo;
    }

    set transactionNo(value) {
        this._transactionNo = value;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }

    get dateOfTransaction() {
        return this._dateOfTransaction;
    }

    set dateOfTransaction(value) {
        this._dateOfTransaction = value;
    }
}