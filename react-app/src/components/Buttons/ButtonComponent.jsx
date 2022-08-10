import React from 'react';
import Button from '@mui/material/Button';

const ButtonComponent = ({ label, ...props }) => (
  <Button variant="contained" {...props} sx={{ textTransform: 'none' }}>{label}</Button>
);

export default ButtonComponent;
