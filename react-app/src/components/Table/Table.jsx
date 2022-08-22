import React, { useState } from 'react';
import {
  Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography,
} from '@mui/material';
import ButtonComponent from '../Buttons/ButtonComponent';
import PaginationComponent from '../Pagination/PaginationComponent';

const TableComponent = ({
  columns,
  rows,
  label,
  pagination,
  filter,
  searchCurrency,
  paginationCount,
}) => {
  const getChangeValueAppearance = (column, row) => ((column.id === 'change')
    ? (row[0] === '-') ? '#EB6B6B' : '#6BEBA5'
    : '#FFFFFF');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getRowsContent = (text, row) => {
    switch (text) {
      case 'currencyNameComponent':
      case 'currencyBox':
        return (
          <Box>
            <img src={row.img} alt="currency icon" />
            <Typography component="h3">
              {row.shortName}
            </Typography>
            <Typography component="h4">
              {row.fullName}
            </Typography>
          </Box>
        );
      case 'tradeButton':
        return (
          <ButtonComponent
            label="Торговать"
            color="secondary"
          />
        );
      case 'outputButton':
        return (
          <ButtonComponent
            label="Вывод"
            color="secondary"
          />
        );
      default:
        return text;
    }
  };
  const rowsFilter = (stateFilter, rowsCurrency) => {
    if (stateFilter) {
      return rowsCurrency
        .filter((row) => row.fullName === searchCurrency.fullName);
    }
    return rowsCurrency
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  };
  const rowsMapping = (row) => (
    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
      {columns.map((column) => {
        const text = row[column.id];
        const color = getChangeValueAppearance(column, text);
        return (
          <TableCell
            key={column.id}
            sx={{ color }}
            align={column.align}
            onClick={(e) => console.log(e.target)}
          >
            {getRowsContent(text, row)}
          </TableCell>
        );
      })}
    </TableRow>
  );
  return (
    <Box>
      <Typography variant="title" component="p" color="text.grey">{label}</Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                style={{
                  top: 57,
                  minWidth: column.minWidth,
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableHead>
          <TableBody>
            {rowsFilter(filter, rows).map(rowsMapping)}
          </TableBody>
        </Table>
      </TableContainer>
      {pagination
        ? (
          <PaginationComponent
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={paginationCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )
        : ''}
    </Box>
  );
};

export default TableComponent;
