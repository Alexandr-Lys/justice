import React from 'react';
import { Box, Typography } from '@mui/material';

const CurrencyName = ({ image, currencyShort, currencyFull }) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    borderRadius: '3px',
    backgroundColor: '#191F29',
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
    <img src={image} alt="" />
    <Typography component="h3">
      {currencyShort}
    </Typography>
    <Typography component="h4">
      {currencyFull}
    </Typography>
  </Box>
);

export default CurrencyName;
