import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import './Login.css'
function Login(){



    return(
        <Box sx={{ p: 2, width:'30%' }}>
            <form>
                <fieldset>
                    <legend className="legend">Customer Login</legend>
                    <TextField id="email" label="Email" fullWidth variant="outlined" sx={{mb:2}}>

                    </TextField>

                    <TextField id="password" label="Password" fullWidth variant="outlined" sx={{mb:2}} />
                    <TextField id="captcha" label="Captcha" fullWidth variant="outlined" sx={{mb:2}} />
                    <Button fullWidth variant="outlined" >Login</Button>
                </fieldset>
            </form>
        </Box>
    )

}


export default Login;
