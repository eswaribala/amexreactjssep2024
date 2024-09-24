import {faker} from '@faker-js/faker'
export var customers=new Array();
var customer;
for(let i=0;i<100;i++){
    customer={
        "firstName":faker.person.firstName(),
        "lastName":faker.person.lastName(),
        /*"dob":new Date(getRndInteger(1970,2023),
            getRndInteger(1,11),
            getRndInteger(1,26))*/
        "dob":faker.date.birthdate()
    }
    customers.push(customer);
}
export var accounts=new Array();
var account;
for(let i=0;i<100;i++){
    account={
        "accountNo":faker.number.int(10000,100000),
        "amount":faker.number.int(10000,100000),
        /*"dob":new Date(getRndInteger(1970,2023),
            getRndInteger(1,11),
            getRndInteger(1,26))*/
        "date":faker.date.birthdate()
    }
   accounts.push(account);
}