//call back hell
window.addEventListener('load',function(){

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