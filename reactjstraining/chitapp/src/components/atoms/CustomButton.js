import React from 'react'
import {Button} from "@mui/material";

export function CustomButton({text,color,variant}){



    return(

        <Button fullWidth variant={variant} color={color}>
            {text}
        </Button>

    )

}