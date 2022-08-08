import React from 'react';
import { FormControlLabel, Radio } from '@mui/material';

const RadioButton = ({ text }) => (
  <FormControlLabel
    value="value"
    control={<Radio sx={{ color: 'rgba(255, 255, 255, 0.2)' }} />}
    label={text}
    labelPlacement="end"
    sx={{ color: '#8C939D' }}
  />
);

export default RadioButton;
