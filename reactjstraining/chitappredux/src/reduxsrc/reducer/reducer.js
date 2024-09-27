import {TOGGLE_CHECK_BOX, USER_FORM_SUBMITTED} from "../types/types";

const initialState = {
    isChecked:false,
    data: {
        name:"",
        age:0
    }, // Checkbox is unchecked initially
};
export const checkBoxReducer=(state= initialState,action)=>{

    switch(action.type){

        case TOGGLE_CHECK_BOX:{
            return{
                ...state,
                isChecked:action.payload
            }
        }
        case USER_FORM_SUBMITTED:{
            alert(action.payload)
            return{
                ...state,
                data:action.payload,

            }

        }
        default:{
            return state;
        }



    }
}