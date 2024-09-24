function outer(){
    let accountNo=4075043
    
    function inner(){
        let amount=37456734;
        return "AccountNo"+accountNo+",Amount="+amount;

    }
    return inner;
}


let outerScope=outer();
console.log(outerScope); //will return function
console.log(outerScope()); //will return value

