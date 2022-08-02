import React from 'react';
import Button from '@mui/material/Button';
import {ThemeProvider, createTheme} from "@mui/material";
import {red} from "@mui/material/colors";



const MyButton = ({type, name, ...props}) => {
    return (
        <Button variant="contained" {...props} >{name}</Button>
    );
}

export default MyButton;