//call back hell
window.addEventListener('load',function(){

    fetchCountriesJSON("https://restcountries.com/v2/all").then(countries => {
        countries.forEach(country=>{
            console.log(country.name);
        })
    });

/*
    async function logCountryData() {
        try {
            let countries = await getData("GET","https://restcountries.com/v2/all")

          countries.forEach(country=>{
                console.log(country.name);
            })
        } catch (err) {
            console.log(err)
        }
    }
    logCountryData()
*/

    //getCountryData("GET","https://restcountries.com/v2/all").then(onSuccess,OnFailure);
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








async function onSuccess(countries){

    let data=await countries;
    if(data!=undefined)
       console.log(data);




}

async function OnFailure(error){
    let errorData= await error;
   console.log(errorData);
}