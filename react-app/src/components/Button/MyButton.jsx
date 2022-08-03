import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ type, name, ...props }) => (
  <Button variant="contained" {...props}>{name}</Button>
);

export default MyButton;
