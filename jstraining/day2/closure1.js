const {faker}=require('@faker-js/faker');
function validateDate(){
    const start=Date.parse('01 Jan 1970 00:00:00' );
    return{
        checkDate:function(dob){
            if(dob>start)
                return "Younger";
            else
                return "Elder";
        }
    }
}

//privacy

let testdob=validateDate();

console.log(testdob.checkDate(faker.date.birthdate()));