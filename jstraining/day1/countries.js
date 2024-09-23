function getCountryData(methodName,url){
    var xhr = new XMLHttpRequest();
    var promiseObj=new Promise(success => {

            xhr.open(methodName, url, true);
            xhr.send()

            //retrieve response
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log("xhr done successfully");
                        var resp = xhr.responseText;
                        var respJson = JSON.parse(resp);
                        success(respJson);
                    }
                } else {
                    console.log("xhr processing going on");
                }
            }
        },
        failure=>{

                failure(xhr.status);
                console.log("xhr failed");

        }
    );

    return promiseObj;
}




