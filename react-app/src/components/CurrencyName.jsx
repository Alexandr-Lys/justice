import React from 'react';
import { Box, Typography } from '@mui/material';

const CurrencyName = ({ option }) => {
  console.log(option);
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderRadius: '3px',
      backgroundColor: 'transparent',
      padding: '2px',
      '& h3': {
        color: '#FFFFFF',
        fontSize: '14px',
      },
      '& h4': {
        color: '#FFFFFF',
        opacity: '0.7',
        fontSize: '11px',
      },
    }}
    >
      <img src={option.img} alt="" />
      <Typography component="h3">
        {option.shortName}
      </Typography>
      <Typography component="h4">
        {option.fullName}
      </Typography>
    </Box>
  );
};
export default CurrencyName;
