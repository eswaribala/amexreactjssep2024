import React, {useEffect, useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import './Login.css'
import {CustomTextField} from "../atoms/CustomTextField";
import {CustomButton} from "../atoms/CustomButton";
import  * as yup from 'yup';
import {useFormik} from "formik";

function Login(){

    //value state
    const [value,setValue]=useState('');

    useEffect((value) => {
        setValue(value)

    }, [value]);


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
             alert(values.email+","+values.password);

        }
    })




    return(
        <Box sx={{ p: 2, width:'30%' }}>
            <form onSubmit={formik.handleSubmit} >
                <fieldset>
                    <legend className="legend">Customer Login</legend>
                    <CustomTextField id="email" label="Email" type="email" value={formik.values.email}
                                     onBlur={formik.handleBlur}
                                     onChange={formik.handleChange}
                                     error={formik.errors.email && Boolean(formik.errors.email)}
                                     helperText={formik.touched.email && formik.errors.email}

                    />
                    <CustomTextField id="password" label="Password" type="password" value={formik.values.password}
                                     onBlur={formik.handleBlur}
                                     onChange={formik.handleChange}
                                     error={formik.errors.password && Boolean(formik.errors.password)}
                                     helperText={formik.touched.password && formik.errors.password}


                    />
                   {/* <CustomTextField id="captcha" label="captcha"/>*/}
                    <CustomButton text="Login" type="submit" color="success" variant="contained" ></CustomButton>
                </fieldset>
            </form>
        </Box>
    )

}


export default Login;
