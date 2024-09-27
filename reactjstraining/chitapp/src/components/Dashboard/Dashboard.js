import React, {useEffect, useState} from 'react';

import DashboardMenu from "../DashboardMenu/DashboardMenu";
import { createContext } from 'react';

export const MyContext = createContext("");
const Dashboard = () => {
    const [email, setEmail] = useState("");
    useEffect(() => {
        setEmail(sessionStorage.getItem("email"))
    }, []);
    return(
        <div>
            <MyContext.Provider value={{ email, setEmail }}>
               <DashboardMenu/>
            </MyContext.Provider>
        </div>
    );
}



export default Dashboard;
