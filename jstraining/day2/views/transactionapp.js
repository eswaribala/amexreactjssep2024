import {Transaction} from '../models/transaction.js'
import {DirectDebit} from "../models/directdebit.js";
import {ExternalTransaction} from "../models/externaltransaction.js";
import {faker} from '@faker-js/faker'
for(let i=0;i<100;i++) {
    let transaction = new Transaction();
    transaction._transactionNo = faker.number.int(10000, 1000000);
    transaction._amount = faker.number.int(10000, 1000000);
    transaction._dateOfTransaction = faker.date.birthdate();

}
//static method
console.log(Transaction.getCount());

//direct debit
let directDebit=new DirectDebit();
directDebit._transactionNo = faker.number.int(10000, 1000000);
directDebit._amount = faker.number.int(10000, 1000000);
directDebit._dateOfTransaction = faker.date.birthdate();
directDebit._paymentDate= faker.date.birthdate();
console.log(directDebit);


//external transaction
let externalTransaction=new ExternalTransaction();
externalTransaction._transactionNo = faker.number.int(10000, 1000000);
externalTransaction._amount = faker.number.int(10000, 1000000);
externalTransaction._dateOfTransaction = faker.date.birthdate();
externalTransaction._branchName=faker.company.name()
externalTransaction._branchCode=faker.location.secondaryAddress()
externalTransaction._branchPostCode=faker.location.zipCode()
externalTransaction._branchAddress=faker.location.street()
console.log(externalTransaction);
