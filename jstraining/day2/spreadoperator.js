const {faker}=require('@faker-js/faker');
let customer={
    accountNo:faker.number.int(10000,1000000),
    firstName:faker.person.firstName(),
    lastName:faker.person.lastName(),
    address:faker.location.city(),
    email:faker.internet.email(),
     password:faker.internet.password()
}

let account={
    accountNo:faker.number.int(10000,1000000),
    runningTotal:faker.number.int(10000,1000000),
    openingDate: faker.date.birthdate(),
    transactions:[{
        transactionNo:faker.number.int(1000,1000000),
        amount:faker.number.int(1000,1000000),
        date:faker.date.birthdate()
    },
        {
            transactionNo:faker.number.int(1000,1000000),
            amount:faker.number.int(1000,1000000),
            date:faker.date.birthdate()
        },
        {
            transactionNo:faker.number.int(1000,1000000),
            amount:faker.number.int(1000,1000000),
            date:faker.date.birthdate()
        }
    ]
}


let updatedInstance={...customer,...account}
account.transactions[1].transactionNo=1000;
console.log(updatedInstance);