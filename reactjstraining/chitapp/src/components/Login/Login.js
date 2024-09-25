import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import './Login.css'
import {CustomTextField} from "../atoms/CustomTextField";
import {CustomButton} from "../atoms/CustomButton";
import  * as yup from 'yup';
import {useFormik} from "formik";

function Login(){

    const yupValidationSchema=yup.object({
        email:yup.string("Enter Email").email("Enter Valid Email").required("Must Enter email"),
        password:yup.string("Enter Password").required("Must Enter password")
    })

    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:yupValidationSchema,
        onSubmit:function(values){

        }
    })




    return(
        <Box sx={{ p: 2, width:'30%' }}>
            <form>
                <fieldset>
                    <legend className="legend">Customer Login</legend>
                    <CustomTextField id="email" label="Email"/>
                    <CustomTextField id="password" label="Password"/>
                    <CustomTextField id="captcha" label="captcha"/>
                    <CustomButton text="Login" color="success" variant="contained" ></CustomButton>
                </fieldset>
            </form>
        </Box>
    )

}


export default Login;
