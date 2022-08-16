import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Typography, Box, Table,
  TableBody, TableCell,
  TableContainer, TableHead,
  TableRow, Paper,
} from '@mui/material';

import SearchInput from '../../Inputs/SearchInput';
import PaginationComponent from '../../Pagination/PaginationComponent';
import ButtonComponent from '../../Buttons/ButtonComponent';
import { marketsPageStyles } from '../MuiStyles';

const MarketsPage = () => {
  const rows = useSelector((state) => state.currency);
  const columns = [
    { id: 'name', label: 'Название', minWidth: 170 },
    { id: 'price', label: 'Цена', minWidth: 100 },
    { id: 'change', label: 'Изм за 24ч', minWidth: 170 },
    { id: 'volume', label: 'Объем за 24ч', minWidth: 170 },
    { id: 'capitalize', label: 'Капитализация', minWidth: 170 },
    { id: 'trade', minWidth: 170 },
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [value, setValue] = useState(rows[0]);
  const [onFilter, setOnFilter] = useState(false);

  const searchCurrency = useMemo(() => rows.find((obj) => obj.fullName === value.fullName), [value]);
  const paginationCount = useMemo(() => (onFilter ? 1 : rows.length), [onFilter, rows]);
  const getChangeValueAppearance = (column, row) => ((column.id === 'change')
    ? (row[0] === '-') ? '#EB6B6B' : '#6BEBA5'
    : '#FFFFFF');

  const rowsRender = (stateFilter, rowsCurrency) => {
    if (stateFilter) {
      return rowsCurrency
        .filter((row) => row.fullName === searchCurrency.fullName)
        .map((row) => (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
            {columns.map((column) => {
              const text = row[column.id];
              const color = getChangeValueAppearance(column, text);
              return (
                <TableCell sx={{ color }} key={column.id} align={column.align} onClick={(e) => console.log(e.target)}>
                  {
                    text === 'currencyNameComponent'
                      ? (
                        <Box>
                          <img src={row.img} alt="currency icon" />
                          <Typography component="h3">
                            {row.shortName}
                          </Typography>
                          <Typography component="h4">
                            {row.fullName}
                          </Typography>
                        </Box>
                      )
                      : text === 'tradeButton'
                        ? (
                          <ButtonComponent
                            label="Торговать"
                            color="secondary"
                          />
                        )
                        : text
                  }
                </TableCell>
              );
            })}
          </TableRow>
        ));
    }
    return rowsCurrency
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((row) => (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
          {columns.map((column) => {
            const text = row[column.id];
            const color = getChangeValueAppearance(column, text);
            return (
              <TableCell
                sx={{ color }}
                key={column.id}
                align={column.align}
                onClick={(e) => console.log(e.target)}
              >
                {
                    text === 'currencyNameComponent'
                      ? (
                        <Box>
                          <img src={row.img} alt="currency icon" />
                          <Typography component="h3">
                            {row.shortName}
                          </Typography>
                          <Typography component="h4">
                            {row.fullName}
                          </Typography>
                        </Box>
                      )
                      : text === 'tradeButton'
                        ? (
                          <ButtonComponent
                            label="Торговать"
                            color="secondary"
                          />
                        )
                        : text
                  }
              </TableCell>
            );
          })}
        </TableRow>
      ));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box sx={marketsPageStyles}>
      <Box>
        <Typography variant="h2" component="h1">Курсы валют</Typography>
        <SearchInput
          rows={rows}
          setValue={setValue}
          setOnFilter={setOnFilter}
        />
      </Box>

      <Paper sx={{ width: '100%' }}>
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
              {rowsRender(onFilter, rows)}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <PaginationComponent
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={paginationCount}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>

  );
};

export default MarketsPage;
