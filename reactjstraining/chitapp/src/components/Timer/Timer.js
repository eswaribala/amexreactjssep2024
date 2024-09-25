import React, {useEffect, useState} from 'react';


export function Timer(){
    //step1
    //state
    const[currentDateTime,setCurrentDateTime]=useState(new Date());
    //step2
    //updates the current time
    useEffect(() => {
        setInterval(()=>{
            setCurrentDateTime(new Date())
        },1000)
    }, [currentDateTime]);

    return(
        <div>
            {/*Step3
            Display state*/}
            <h6>{currentDateTime.toLocaleTimeString()}</h6>
        </div>
    )


}



export default Timer;
