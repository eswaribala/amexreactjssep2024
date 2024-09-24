//export constructor
export function Customer(accountNo, firstName,lastName, address, email, password){
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


