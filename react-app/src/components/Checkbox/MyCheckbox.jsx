import React from 'react';
import {Checkbox, FormControlLabel} from "@mui/material";

function MyCheckbox({label, type}) {
    let color = 'gray'
    if(type === 'error') color = '#D24242'
    return (
        <FormControlLabel control={<Checkbox sx = {{color: {color}}}/>} label={label} sx = {{color: 'white'}}/>
);
}

export default MyCheckbox;