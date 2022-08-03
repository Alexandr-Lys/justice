import React from 'react';
import { TextField, styled } from '@mui/material';

const MyInput = ({ type, text, error }) => {
  const CssTextField = styled(TextField)({
    backgroundColor: 'transparent',
    caretColor: 'white',
    '& input': {
      color: 'white',
    },
    '& .css-fbxpga-MuiFormLabel-root-MuiInputLabel-root': {
      color: '#8C939D',
    },
    '& .css-1m0k6wk-MuiFormControl-root-MuiTextField-root': {
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    '& .css-vhzulr-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
      color: '#8C939D',
    },
    '& .css-1ie2ycx-MuiInputBase-root-MuiFilledInput-root:hover': {
      backgroundColor: '8C939D',
      border: 'none',
    },
    '& .css-1ie2ycx-MuiInputBase-root-MuiFilledInput-root:after': {
      border: 'none',
    },
    '& .css-1ie2ycx-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled):before': {
      borderBottom: 'none',
    },
  });
  switch (type) {
    case 'error':
      return (
        <TextField
          error
          defaultValue={text}
          helperText={error}
          sx={{
            borderRadius: '3px',
            backgroundColor: 'transparent',
            caretColor: 'white',
            '& input': {
              color: 'white',
            },
            '& .css-abidxy-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: '1px',
            },

          }}
        />
      );
    case 'disabled':
      return (
        <TextField
          defaultValue={text}
          inputProps={{
            readOnly: true,
          }}
          sx={{
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '3px',
            backgroundColor: '#1C2027',
            '& input': {
              color: '#8C939D',
            },
            '& fieldset': {
              display: 'none',
            },

          }}
        />
      );
    default:
      return (
        <CssTextField
          label={text}
          variant="filled"
          sx={{
            boxSizing: 'border-box',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '3px',
            '&:hover': { border: '1px solid rgba(255, 255, 255, 0.2)' },
          }}
        />
      );
  }
};

export default MyInput;
