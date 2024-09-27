import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {checkBoxReducer} from "../../reduxsrc/reducer/reducer";



function Receipts(){
    // Get the checkbox state from Redux
     //const isChecked=useSelector((state)=>state.isChecked)
    const data= useSelector((state) => state.data); // <-- select state.notes array

    useEffect(() => {
        console.log(JSON.parse(data));
    }, [JSON.parse(data)]);

    let jsonData;

    return (
        <div>
            {

                (data)&&(
                    (jsonData=JSON.parse(data))&&(
                        (jsonData)?<h1>{jsonData.name}</h1>:<h1>Not found</h1>
                    )
                )


            }
        </div>
    );

}

export default Receipts;
