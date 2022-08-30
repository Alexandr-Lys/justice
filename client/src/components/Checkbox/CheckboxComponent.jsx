import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

const CheckboxComponent = ({
  label, type, control, name,
}) => {
  let color = 'gray';
  if (type === 'error') color = '#D24242';
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field,
      }) => (
        <FormControlLabel
          control={<Checkbox sx={{ color: { color } }} onChange={(e) => { field.onChange(e); }} />}
          label={label}
          sx={{ color: 'white' }}
        />
      )}
    />
  );
};

export default CheckboxComponent;
