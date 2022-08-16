import React from 'react';
import { GlobalStyles, TablePagination } from '@mui/material';

const PaginationComponent = (props) => (
  <>
    <GlobalStyles styles={{
      '&.CustomPagination': {
        backgroundColor: 'transparent',
      },
      '&.CustomPagination li': {
        color: '#FFFFFF',
      },
    }}
    />
    <TablePagination
      {...props}
      sx={{
        color: '#FFFFFF',
        '& button:hover': {
          backgroundColor: 'primary.main',
        },
        '& button': {
          color: '#FFFFFF',
        },
        '& svg': {
          color: '#FFFFFF',
        },
      }}
    />
  </>
);

export default PaginationComponent;
