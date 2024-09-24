/*
async function getData(methodName,url) {
    var xhr = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
        xhr.open(methodName, url, true)
        xhr.send();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status >= 300) {
                    reject("Error, status code = " + xhr.status)
                } else {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
        }

    });
}
*/


async function fetchCountriesJSON() {
    const response = await fetch('https://restcountries.com/v2/all');
    const countries = await response.json();
    return countries;
}


