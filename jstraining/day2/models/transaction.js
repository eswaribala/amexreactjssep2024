export  class Transaction{

    //static variables
    static count=0;
    constructor(transactionNo,amount,dateOfTransaction) {

        Transaction.count++;
        this._transactionNo = transactionNo;
        this._amount = amount;
        this._dateOfTransaction = dateOfTransaction;
    }

    static getCount(){
        return Transaction.count;
    }


}