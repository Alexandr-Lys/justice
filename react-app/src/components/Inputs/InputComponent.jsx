import React from 'react';
import { TextField, styled } from '@mui/material';
import { Controller } from 'react-hook-form';

const InputComponent = ({
  disabled, label, name, control, errorText, validation, ...props
}) => {
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
  if (disabled) {
    return (
      <Controller
        control={control}
        name={name}
        render={({
          field,
        }) => (
          <TextField
            onChange={(e) => field.onChange(e)}
            value={field.value}
            name={name}
            defaultValue={label}
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
        )}
      />
    );
  }
  switch (!!errorText) {
    case true:
      return (
        <Controller
          control={control}
          name={name}
          rules={validation}
          render={({
            field,
          }) => (
            <TextField
              onChange={(e) => field.onChange(e)}
              value={field.value}
              name={name}
              placeholder={label}
              error
              helperText={errorText}
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
          )}
        />
      );
    default:
      return (
        <Controller
          control={control}
          name={name}
          rules={validation}
          render={({
            field,
          }) => (
            <CssTextField
              {...props}
              onChange={(e) => field.onChange(e)}
              value={field.value}
              helperText={errorText}
              label={label}
              name={name}
              variant="filled"
              sx={{
                boxSizing: 'border-box',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '3px',
                '&>div:after': {
                  display: 'none',
                },
                '&>label.Mui-focused': {
                  color: '#FFFFFF',
                },
                '&:hover': { border: '1px solid rgba(255, 255, 255, 0.2)' },
              }}
            />
          )}
        />

      );
  }
};

export default InputComponent;

