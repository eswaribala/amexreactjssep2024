const {faker}=require('@faker-js/faker')
var customers=new Array();
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

customers.forEach(customer=>{
    console.log(`${customer.firstName}","${customer.lastName}","${customer.dob.toDateString()}`);
})


function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}