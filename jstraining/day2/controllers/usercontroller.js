import {fetchUsersJSON} from '../services/userservice.js'

fetchUsersJSON("https://jsonplaceholder.typicode.com/users").then(response=>{
    console.log(response);
})