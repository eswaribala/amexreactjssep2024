//call back hell
window.addEventListener('load',function(){

    getCountryData("GET","https://restcountries.com/v2/all").then(onSuccess,OnFailure);
//Event listener

    window.addEventListener('click',function(){
        let firstName=document.querySelector("#firstName").value;
        let para=document.querySelector("p");
        let element=document.createElement('h1');
        let textNode=document.createTextNode(firstName);
        element.appendChild(textNode);
        para.appendChild(element);


    })

})

function onSuccess(countries){

    countries.forEach(country=>{
        console.log(country.name);
    })
}

function OnFailure(error){
   console.log(error);
}