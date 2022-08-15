import React, { useState } from 'react';
import {
  Typography, Box, Table,
  TableBody, TableCell,
  TableContainer, TableHead,
  TableRow, Paper,
} from '@mui/material';

import { useSelector } from 'react-redux';
import SearchInput from '../../Inputs/SearchInput';
import CurrencyName from '../../CurrencyName';
import PaginationComponent from '../../PaginationComponent';
import ButtonComponent from '../../Buttons/ButtonComponent';
import { currencyList } from '../../../api/currency';

const MarketsPage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [value, setValue] = useState(currencyList[0]);
  const [onFilter, setOnFilter] = useState(false);
  const rows = useSelector((state) => state.currency);
  const columns = [
    {
      id: 'name', label: 'Название', minWidth: 170,
    },
    { id: 'price', label: 'Цена', minWidth: 100 },
    {
      id: 'change',
      label: 'Изм за 24ч',
      minWidth: 170,
    },
    {
      id: 'volume',
      label: 'Объем за 24ч',
      minWidth: 170,
    },
    {
      id: 'capitalize',
      label: 'Капитализация',
      minWidth: 170,
    },
    {
      id: 'trade',
      minWidth: 170,
    },
  ];
  const searchCurrency = () => rows.find((obj) => obj.fullName === value.fullName);

  const getChangeValueAppearance = (column, row) => {
    if (column.id === 'change') {
      switch (row[0]) {
        case '-':
          return '#EB6B6B';
        default:
          return '#6BEBA5';
      }
    } else {
      return '#FFFFFF';
    }
  };

  const rowsRender = (stateFilter, rowsCurrency) => {
    if (stateFilter) {
      return rowsCurrency
        .filter((row) => row.fullName === searchCurrency().fullName)
        .map((row) => (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
            {columns.map((column) => {
              console.log(column);
              const text = row[column.id];
              const color = getChangeValueAppearance(column, text);
              return (
                <TableCell sx={{ color }} key={column.id} align={column.align} onClick={(e) => console.log(e.target)}>
                  {
                    text === 'currencyNameComponent'
                      ? <CurrencyName currency={row} />
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
            console.log(column);
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
                    ? <CurrencyName currency={row} />
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
    <Box sx={{
      width: '100%', //!
      height: '100vh',
      '&>div:first-of-type': {
        margin: '48px 0 32px',
        height: '48px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    }}
    >
      <Box>
        <Typography variant="h2" component="h1">Курсы валют</Typography>
        <SearchInput
          currencyList={currencyList}
          searchCurrency={searchCurrency}
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
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>

  );
};

export default MarketsPage;
