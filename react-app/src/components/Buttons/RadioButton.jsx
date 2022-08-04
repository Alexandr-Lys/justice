import React from 'react';
import { FormControlLabel, Radio } from '@mui/material';

const RadioButton = () => (
  <FormControlLabel
    value="value"
    control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.2)' }} />}
    label="Банковская карта (Mastercard)"
    labelPlacement="end"
    sx={{ color: '#8C939D' }}
  />
);

export default RadioButton;
