//global variables
var companyName="Global Banking";
let address="Bangalore";
const pincode=860001;

function showAddress(){
    console.log("Company Name="+companyName);
    console.log("Address="+address)
    console.log("Pincode="+pincode)
}

//call the function
showAddress();


//function scope
function showTransaction(){
    var transactionNo=439659;
    let amount=3475899;
    let transactionDate=new Date();
    console.log("Transaction No"+transactionNo);
    //block scope
    {
        var test=23445;
        let accountNo=348767;
        let balance=50000;
        console.log("Balance"+balance);

    }


}

//invoke the function
showTransaction();
//out of scope
//console.log("Transaction No"+transactionNo);


//Lexical Scope

function customerData(){
    let customerId=437766
    function accountData(){
        let accountNo=4396943;
        let balance=56794599;
        console.log(`${accountNo},${balance}`)
    }
    accountData();
   // console.log(`Customer ID=${customerId} ${balance}`);
}

customerData();

//console.log(`Customer ID=${customerId}`);

var name="Global Bank";
let firstName="Global";
const dob=new Date();
//redeclaring
var name="Axis Bank";
//cannot redeclare
//let firstName="Testing";
firstName="Testing";