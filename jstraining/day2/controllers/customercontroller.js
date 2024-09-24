import {customers,accounts} from "../services/customerservice.js";
const start=Date.parse('01 Jan 1970 00:00:00' );
const end=Date.now();
customers.forEach(customer=>{

    if((customer.dob>start)&&(customer.dob<end))
        console.log(`${customer.firstName}","${customer.lastName}","${customer.dob.toDateString()}`);
})

accounts.forEach(account=>{

   console.log(`${account.accountNo}","${account.amount}","${account.date.toDateString()}`);
})