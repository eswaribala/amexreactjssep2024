import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toggleCheckBoxAction, UserAction} from "../../reduxsrc/action/action";
//import {toggleCheckbox} from "../../reduxsrc/actions/actions";

export function DuePayments(){

   // const name=useSelector((state)=>state.name);
   // const age=useSelector((state)=>state.age);
    //const isChecked=useSelector((state)=>state.isChecked);

    const [name,setName]=useState('Parameswari');
    const[age,setAge]=useState(0);
    const dispatcher=useDispatch();



    function handleName(event){
         setName(event.target.value)
    }
    function handleAge(event){
        setAge(event.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
            let data={
                name:name,
                age:age
            }
          dispatcher(UserAction(JSON.stringify(data)));
    }

    return (
        <div>
            {/* <label>
               <input type="checkbox" checked={isChecked}  onChange={handleChange}/>
               Is Payment Done?
           </label>*/}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" value={name}  onChange={handleName} />
                </div>
                <div>
                    <label>Age: </label>
                    <input
                        type="number"
                        value={age}
                        onChange={handleAge} // Controlled input
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );

}
