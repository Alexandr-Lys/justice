import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Status = ({ text }) => {
  switch (text) {
    case 'В обработке':
      return (
        <Container sx={{ width: '68px', p: '0 !important' }}>
          <Box sx={{
            p: '0',
            background: 'rgba(203, 184, 14, 0.1)',
            textAlign: 'center',
          }}
          >
            <Typography
              variant="caption"
              component="h2"
              sx={{
                color: '#CBB80E',
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
    case 'Отклонено':
      return (
        <Container sx={{ width: '68px', p: '0 !important' }}>
          <Box sx={{
            p: '0',
            background: 'rgba(203, 184, 14, 0.1)',
            textAlign: 'center',
          }}
          >
            <Typography
              variant="caption"
              component="h2"
              sx={{
                color: '#EB6B6B',
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
    default:
      return (
        <Container sx={{ width: '68px', p: '0 !important' }}>
          <Box sx={{
            p: '0',
            background: 'rgba(203, 184, 14, 0.1)',
            textAlign: 'center',
          }}
          >
            <Typography
              variant="caption"
              component="h2"
              sx={{
                color: '#0ECB81',
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
  }
};

export default Status;
