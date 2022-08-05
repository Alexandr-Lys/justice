import React from 'react';
import { Box, Typography } from '@mui/material';

const Notification = ({ status, size }) => {
  let typeColor = '#EB6B6B';
  let typeText = 'Недостаточно средств. Пожалуйста, пополните счет.';
  let typeSize = '364px';
  let typePadding = '16px 0';
  if (status === 'success') {
    typeColor = '#0ECB81';
    typeText = 'Операция прошла успешно';
  }
  if (size === 'small') {
    typeSize = '238px';
    typePadding = '12px 0';
  }
  return (
    <Box sx={{
      backgroundColor: 'transparent',
      width: `${typeSize}`,
      border: `1px solid ${typeColor}`,
    }}
    >
      <Typography sx={{
        fontFamily: 'Inter',
        fontSize: '12px',
        color: `${typeColor}`,
        padding: `${typePadding}`,
      }}
      >
        {typeText}
      </Typography>
    </Box>
  );
};

export default Notification;
