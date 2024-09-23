function getCountryData(methodName,url){

    var promiseObj=new Promise(function(success,failure){
        //ajax call
        var xhr=new XMLHttpRequest();
        xhr.open(methodName,url,true );
        xhr.send()

        //retrieve response
        xhr.onreadystatechange=function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    console.log("xhr done successfully");
                    var resp = xhr.responseText;
                    var respJson = JSON.parse(resp);
                    success(respJson);
                } else {
                    failure(xhr.status);
                    console.log("xhr failed");
                }
            } else {
                console.log("xhr processing going on");
            }


        }


    })

    return promiseObj;
}