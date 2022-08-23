import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Status = ({ text }) => {
  const getStatusOption = () => {
    switch (text) {
      case 'В обработке':
        return {
          width: '90px',
          color: '#CBB80E',
        };
      case 'Отклонено':
        return {
          width: '68px',
          color: '#EB6B6B',
        };
      default:
        return {
          width: '68px',
          color: '#0ECB81',
        };
    }
  };
  return (
    <Container sx={{
      width: getStatusOption().width,
      height: '26px',
      p: '0 !important',
      m: 0,
      '&>div': {
        p: '0',
        background: 'rgba(203, 184, 14, 0.1)',
        textAlign: 'center',
        '&>h2': {
          color: getStatusOption().color,
          p: '4px 4px',
          fontFamily: 'Inter',
          fontWeight: '500',
          fontSize: '10px',
          lineHeight: '16px',
        },
      },
    }}
    >
      <Box>
        <Typography variant="caption" component="h2">
          {text}
        </Typography>
      </Box>
    </Container>
  );
};

export default Status;
