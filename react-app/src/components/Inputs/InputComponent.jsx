import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { inputStyles } from '../Pages/MuiStyles';

const InputComponent = ({
  disabled, label, name, control, errorText, value, validation, ...props
}) => (disabled
  ? (
    <TextField
      {...props}
      disabled
      sx={{
        ...inputStyles,
        backgroundColor: '#1C2027',
        '& .Mui-disabled': {
          color: '#8C939D',
          textFillColor: '#8C939D',
        },
      }}
      label={label}
      name={name}
      variant="filled"
      value={value}
    />
  )
  : (
    <Controller
      control={control}
      name={name}
      render={({
        field,
      }) => (
        <TextField
          {...props}
          sx={{
            ...inputStyles,
          }}
          onChange={(e) => field.onChange(e)}
          onBlur={() => field.onBlur()}
          value={field.value}
          error={!!errorText}
          helperText={errorText}
          label={label}
          name={name}
          variant="filled"
        />
      )}
    />
  )
);
export default InputComponent;
