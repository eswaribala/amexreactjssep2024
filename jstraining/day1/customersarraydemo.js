var customers=new Array();
var customer;
for(let i=0;i<100;i++){
    customer={
        "firstName":"FirstName"+i,
        "lastName":"LastName"+i,
        "dob":new Date(getRndInteger(1970,2023),
            getRndInteger(1,11),
            getRndInteger(1,26))
    }
    customers.push(customer);
}

customers.forEach(customer=>{
    console.log(`${customer.firstName}",",${customer.dob}`);
})


function getRndInteger(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}