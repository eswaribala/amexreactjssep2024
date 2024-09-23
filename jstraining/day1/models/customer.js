
const {faker}=require('@faker-js/faker')
//constructor
function Customer(accountNo, firstName,lastName, address, email, password){
    //instance variables
    this.accountNo=accountNo;
    this.firstName=firstName;
    this.lastName=lastName;
    this.address=address;
    this.email=email;
    this.password=password;
    this.balance=0;
    var fullName=this.firstName+" "+this.lastName;
    this.getFullName=function(){
        return fullName;
    }
}
//method

Customer.prototype.deposit=function(amount){
    this.balance=this.balance+amount;
}

Customer.prototype.setAccountNo=function (actNo){
    this.accountNo=actNo;
}

//create the object
let customer=new Customer(faker.number.int(10000,1000000),
    faker.person.firstName(),faker.person.lastName(),faker.location.city(),
    faker.internet.email(),faker.internet.password())

//invoke the object
console.log(`${customer.accountNo},${customer.getFullName()}","${customer.address}","${customer.email}",",${customer.password}`);

//invoke the method

customer.deposit(10000);
console.log(`${customer.accountNo},${customer.balance}`);

//updated accountNo
//customer.setAccountNo(faker.number.int(10000,1000000));
customer.accountNo=faker.number.int(10000,1000000);
console.log(`${customer.accountNo},${customer.balance}`);

//inheritance
function Individual(accountNo, firstName,lastName, address,
                    email, password, gender, dateOfBirth){

//super class constructor
    Customer.call(this,accountNo, firstName,lastName, address,
        email, password);

    this.gender=gender;
    this.dob=dateOfBirth;

}
//Inheritance
Individual.prototype=Object.create(Customer.prototype);
//create individual object
var individual=new Individual(faker.number.int(10000,1000000),
    faker.person.firstName(),faker.person.lastName(),faker.location.city(),
    faker.internet.email(),faker.internet.password(),faker.person.sex(),
    faker.date.birthdate());
console.log(`${individual.accountNo},${individual.getFullName()}","${individual.address}","${individual.email}","
${individual.password}","${individual.gender}","${individual.dob}`);


//hierarchical inheritance
function Corporate(accountNo, firstName,lastName, address,
                    email, password, companyType){

//super class constructor
    Customer.call(this,accountNo, firstName,lastName, address,
        email, password);

    this.companyType=companyType;

}
//Inheritance
Corporate.prototype=Object.create(Customer.prototype);
//create individual object
var corporate=new Corporate(faker.number.int(10000,1000000),
    faker.person.firstName(),faker.person.lastName(),faker.location.city(),
    faker.internet.email(),faker.internet.password(),"Private");
console.log(`${corporate.accountNo},${corporate.getFullName()}","${corporate.address}","${corporate.email}","
${corporate.password}","${corporate.companyType}"`);
