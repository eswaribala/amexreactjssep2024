getCountries=async (methodName,url)=> {
 let response=undefined;
  let xhr = new XMLHttpRequest();
    try{
        xhr.open(methodName, url, true);
        xhr.send()

        //retrieve response
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log("xhr done successfully");
                    var resp = xhr.responseText;
                    response = JSON.parse(resp);
                     return response;
                }
            } else {
                console.log("xhr processing going on");
            }
        }

    }catch(error){
           response=error.toString();
           return response;
    }

}

