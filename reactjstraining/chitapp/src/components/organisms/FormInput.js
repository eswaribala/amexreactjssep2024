import React from 'react';
import {TextField} from "@mui/material";

const FormInput = ({ label, name, type, value, onChange, error}) => {

    return (
        <div style={{ marginBottom: '10px' }}>
            <label>{label}</label>
            <TextField
                fullWidth
                margin="dense"
                name={name}
                type={type}
                value={value}
                onChange={onChange}
            />

            {error && <span style={{ color: 'red' }}>{error}</span>}
        </div>
    );
};

export default FormInput;