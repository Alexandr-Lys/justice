import React from 'react';
import { Box, Typography } from '@mui/material';

const CurrencyName = ({ image, currencyFull, currencyShort }) => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  }}
  >
    <img src={image} alt="" />
    <Typography variant="body1" component="p">
      {currencyShort}
    </Typography>
    <Typography variant="body2" component="p">
      {currencyFull}
    </Typography>
  </Box>
);

export default CurrencyName;
