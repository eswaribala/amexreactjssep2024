const {faker}=require('@faker-js/faker');

//account object creation

let account=Object.create(Object.prototype);

Object.defineProperty(account,'runningTotal',{
    writable:true,
    enumerable:true,
    configurable:true
})
Object.defineProperty(account,'openingDate',{
    /*
    Invalid with getter and setter
    writable:true,
    enumerable:true,
    configurable:true,*/
    get:function(){return openingDate},
    set:function(value){openingDate=value.toDateString()},

})

account.runningTotal=faker.number.int(10000,1000000);
account.openingDate=faker.date.birthdate()
console.log(`Account=${account.openingDate}`);

//read all the keys
for(let key in account){
    console.log(`${key},${account[key]}`);
}
/*
//redefine the property
Object.defineProperty(account,'runningTotal',{
    writable:false,
    enumerable:true,
    configurable:false
})
account.runningTotal=faker.number.int(10000,1000000);
//read all the keys
for(let key in account){
    console.log(`${key},${account[key]}`);
}
*/
/*
//redefine the property
Object.defineProperty(account,'runningTotal',{
    writable:true,
    enumerable:true,
    configurable:false
})
account.runningTotal=faker.number.int(10000,1000000);
//read all the keys
for(let key in account){
    console.log(`${key},${account[key]}`);
}

 */