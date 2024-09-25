import React from 'react'
import {TextField} from "@mui/material";


export function CustomTextField({id,label}){

    return(
        <TextField id={id}  label={label} fullWidth variant="outlined" sx={{mb:2}}>

        </TextField>
    )
}