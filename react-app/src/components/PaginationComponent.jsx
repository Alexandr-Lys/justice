import React from 'react';
import { GlobalStyles, TablePagination } from '@mui/material';

const PaginationComponent = ({ quantity }) => {
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
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
        component="div"
        count={quantity}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
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
};

export default PaginationComponent;
