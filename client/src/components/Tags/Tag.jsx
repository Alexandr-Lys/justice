import React from 'react';
import { Box, Typography } from '@mui/material';

const Tag = ({ tagValue }) => (
  <Box sx={{
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '3px',
    display: 'inline-block',
  }}
  >
    <Typography sx={{
      color: '#FFFFFF',
      fontSize: 11,
      padding: '4px 8px',
    }}
    >
      {tagValue}
    </Typography>
  </Box>
);

export default Tag;
