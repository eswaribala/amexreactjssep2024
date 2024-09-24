import {Customer} from "../models/customer.js";
import {faker} from '@faker-js/faker'
let customer=new Customer(faker.number.int(10000,1000000),
    faker.person.firstName(),faker.person.lastName(),faker.location.city(),
    faker.internet.email(),faker.internet.password())

//invoke the object
console.log(`${customer.accountNo},${customer.getFullName()}","${customer.address}","${customer.email}",",${customer.password}`);


