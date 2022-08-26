import React from 'react';
import { Box, Typography } from '@mui/material';

const Notification = ({ status, size }) => {
  switch (status) {
    case 1:
      if (size === 'small') {
        return (
          <Box sx={{
            backgroundColor: 'transparent',
            width: '100%',
            border: '1px solid #0ECB81',
            textAlign: 'center',
          }}
          >
            <Typography sx={{
              fontFamily: 'Inter',
              fontSize: '12px',
              color: '#0ECB81',
              padding: '12px 0',
            }}
            >
              Операция прошла успешно
            </Typography>
          </Box>
        );
      }
      return (
        <Box sx={{
          backgroundColor: 'transparent',
          width: '364px',
          border: '1px solid #0ECB81',
          textAlign: 'center',
        }}
        >
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: '12px',
            color: '#0ECB81',
            padding: '16px 0',
          }}
          >
            Операция прошла успешно
          </Typography>
        </Box>
      );
    case 0:
      if (size === 'small') {
        return (
          <Box sx={{
            backgroundColor: 'transparent',
            width: '100%',
            border: '1px solid #EB6B6B',
            textAlign: 'center',
          }}
          >
            <Typography sx={{
              fontFamily: 'Inter',
              fontSize: '12px',
              color: '#EB6B6B',
              padding: '12px 0',
            }}
            >
              Недостаточный баланс
            </Typography>
          </Box>
        );
      }
      return (
        <Box sx={{
          backgroundColor: 'transparent',
          width: '364px',
          border: '1px solid #EB6B6B',
          textAlign: 'center',
        }}
        >
          <Typography sx={{
            fontFamily: 'Inter',
            fontSize: '12px',
            color: '#EB6B6B',
            padding: '16px 0',
          }}
          >
            Недостаточно средств. Пожалуйста, пополните счет.
          </Typography>
        </Box>
      );
    default:
      return <div />;
  }
};

export default Notification;
