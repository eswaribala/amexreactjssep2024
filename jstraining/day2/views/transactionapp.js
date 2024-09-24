import {Transaction} from '../models/transaction.js'
import {faker} from '@faker-js/faker'

let transaction=new Transaction();
transaction.transactionNo=faker.number.int(10000,1000000);
transaction.amount=faker.number.int(10000,1000000);
transaction.dateOfTransaction=faker.date.birthdate();
console.log(transaction);
