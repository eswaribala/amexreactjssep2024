import React, {useEffect, useState} from 'react';
import {Box, Button, Snackbar, TextField} from "@mui/material";
import './Login.css'
import {CustomTextField} from "../atoms/CustomTextField";
import {CustomButton} from "../atoms/CustomButton";
import  * as yup from 'yup';
import {useFormik} from "formik";
import axios from "axios";
import {LoginUrl} from '../../resources/configurations/config'
import {Alert} from "@mui/lab";

function Login(){

    //step1 snackbar
    const [open,setOpen]=useState(false);
    const [pass,setPass]=useState(false);

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
            let data={
                "email":values.email,
                "password":values.password
            }
            
           axios.post(LoginUrl,data).then(response=>{
               console.log(response.data.token);
               setOpen(true)

           },error=>{
               alert(error);
               setPass(true);
           })

        }
    })

     function handleClose(){
        setOpen(false);
     }


    return(
        <Box sx={{ p: 2, width:'30%' }}>
            <Snackbar open={open}
                      autoHideDuration={5000}
                      onClose={handleClose}
                      sx={{
                          '&.MuiSnackbar-root': { top: '1%', left:'50%' }
                      }}>
                <Alert onClose={handleClose}
                       severity="success"
                       variant="filled"
                       sx={{

                           width: '100%'
                       }}>
                Login Successful
                </Alert>

            </Snackbar>


            <form onSubmit={formik.handleSubmit} >
                <fieldset>
                    <legend className="legend">Customer Login</legend>
                    <CustomTextField id="email" label="Email" type="email" value={formik.values.email}
                                     onBlur={formik.handleBlur}
                                     onChange={formik.handleChange}
                                     error={formik.errors.email && Boolean(formik.errors.email)}
                                     helperText={formik.touched.email && formik.errors.email}

                    />
                    {
                        (pass)?<p>Invalid Password</p>:<p></p>

                    }
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
