import React, {useEffect, useState} from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import Home from "../Home/Home";
import DuePayments from "../DuePayments/DuePayments";
import MyTickets from "../MyTickets/MyTickets";
import Receipts from "../Receipts/Receipts";
import More from "../More/More";


function DashboardMenu(){

   /* const [value,setValue]=useState("1");
    useEffect(() => {

    }, []);
    function handleChange(event,value){
           setValue(value)
    }*/
    const pathName=useLocation();
    return(
        <div>
        <Box sx={{p: 2, width: '70%'}}>
            <TabContext value={pathName}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={pathName}>
                        <Tab label="Home" component={Link} to={"/home"} value={"/home"}  />
                        <Tab label="Due Payments"  component={Link} to={"/duepayments"} value={"/duepayments"}  />
                        <Tab label="My Tickets"  component={Link} to={"/mytickets"} value={"/mytickets"}   />
                        <Tab label="Receipts" component={Link} to={"/receipts"} value={"/receipts"}   />
                        <Tab label="More" component={Link} to={"/more"} value={"/more"}  />
                    </Tabs>
                </Box>
               {/* <TabPanel value="1">Home</TabPanel>
                <TabPanel value="2">My Tickets</TabPanel>
                <TabPanel value="3">Due Payments</TabPanel>
                <TabPanel value="4">Receipts</TabPanel>
                <TabPanel value="5">More</TabPanel>*/}
            </TabContext>
        </Box>
        <Routes>
            <Route path={"/home"}  element={<Home/>}/>
            <Route path={"/duepayments"}  element={<DuePayments/>}/>
            <Route path={"/mytickets"}  element={<MyTickets/>}/>
             <Route path={"/receipts"}  element={<Receipts/>}/>
            <Route path={"/more"}  element={<More/>}/>

        </Routes>
        </div>
    )
}

export default DashboardMenu;
