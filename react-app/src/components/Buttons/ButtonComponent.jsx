import React from 'react';
import Button from '@mui/material/Button';

const ButtonComponent = ({ type, name, ...props }) => (
  <Button variant="contained" {...props}>{name}</Button>
);

export default ButtonComponent;
