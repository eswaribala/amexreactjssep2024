import {TOGGLE_CHECK_BOX, USER_FORM_SUBMITTED} from "../types/types";


export const toggleCheckBoxAction=(data)=>{
   //alert(data)
   return {
       type: TOGGLE_CHECK_BOX,
       payload: data
   };
}

export const UserAction=(data)=>{
    //alert(data)
    return {
        type: USER_FORM_SUBMITTED,
        payload: data
    };
}