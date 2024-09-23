const{faker}=require('@faker-js/faker');
function *OTPGenerator(){
    let i=0;
    while(i<100)
    {
        //asynchronous call
        yield faker.number.int({ min: 1000, max: 9999 });
        i++;
    }
}

let otps=OTPGenerator();

for(let value of otps) {
    console.log(`${value}`); // 1, then 2
}