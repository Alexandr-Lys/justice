import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Status = ({ text }) => {
  let color;
  switch (text) {
    case 'Успешно':
      color = '#0ECB81';
      break;
    case 'В обработке':
      color = '#CBB80E';
      break;
    case 'Отклонено':
      color = '#EB6B6B';
      break;
    default:
      break;
  }
  return (
    <Container sx={{ width: '68px', p: '0 !important' }}>
      <Box sx={{
        p: '0',
        background: 'rgba(203, 184, 14, 0.1)',
      }}
      >
        <Typography
          variant="caption"
          component="h2"
          sx={{
            color: { color },
            p: '4px 4px',
            fontFamily: 'Inter',
            fontWeight: '500',
            fontSize: '10px',
            lineHeight: '16px',
          }}
        >
          {text}
        </Typography>
      </Box>
    </Container>
  );
};

export default Status;
