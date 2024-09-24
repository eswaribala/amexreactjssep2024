const {faker}=require('@faker-js/faker');
function customerInfo(name,adharCardNo,...skills){
   console.log(`${name},${adharCardNo},${skills}`);
}
customerInfo(faker.person.firstName(), faker.number.int(10000,1000000),
    "Java","Js","C","C++");
customerInfo(faker.person.firstName(),
    faker.number.int(10000,1000000));
customerInfo(faker.person.firstName(), faker.number.int(10000,1000000),
    "Java","Python");