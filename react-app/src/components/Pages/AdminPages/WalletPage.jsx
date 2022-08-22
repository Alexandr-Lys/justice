import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

import ButtonComponent from '../../Buttons/ButtonComponent';
import { walletPageStyles } from '../MuiStyles';
import SearchInput from '../../Inputs/SearchInput';
import PaginationComponent from '../../Pagination/PaginationComponent';

import RUB from '../../../assets/svg/criptorrency/CurrencyRUB.svg';
import USD from '../../../assets/svg/criptorrency/CurrencyUSD.svg';

const WalletPage = () => {
  const rows = useSelector((state) => state.currency);
  const columns = [
    { id: 'name', label: 'Название' },
    { id: 'total', label: 'Всего', minWidth: '120px' },
    { id: 'totalOrder', label: 'В ордере', minWidth: '120px' },
    { id: 'available', label: 'Доступно', minWidth: '120px' },
    { id: 'availableOrder', label: 'В ордере', minWidth: '120px' },
    { id: 'output' },
  ];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
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

  const rowsFiat = [
    {
      name: 'currencyBox',
      total: 0,
      totalOrder: 0,
      available: 0,
      availableOrder: 0,
      output: 'outputButton',
      shortName: 'RUB',
      fullName: 'Russian Ruble',
      img: RUB,
    },
    {
      name: 'currencyBox',
      total: 0,
      totalOrder: 0,
      available: 0,
      availableOrder: 0,
      output: 'outputButton',
      shortName: 'USD',
      fullName: 'American dollar',
      img: USD,
    },
  ];

  return (
    <Box sx={walletPageStyles}>
      <Box>
        <Typography variant="h2" component="h1">Кошелек</Typography>
        <Box>
          <Link to="/output">
            <ButtonComponent
              color="secondary"
              label="Вывод"
            />
          </Link>
          <Link to="/refill">
            <ButtonComponent
              color="primary"
              label="Пополнить"
            />
          </Link>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography variant="title" color="text.grey">Фиатный и спотовый баланс</Typography>
          <Box>
            <Typography variant="h3">123040000 BTC</Typography>
            <Typography variant="h3" color="text.grey">≈ Р 133329</Typography>
          </Box>
        </Box>
        <SearchInput
          rows={rows}
          setValue={setValue}
          setOnFilter={setOnFilter}
        />
      </Box>
      <Box>
        <Typography variant="title" component="p" color="text.grey">Фиатный баланс</Typography>
        <Box>
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
                {rowsFiat.map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const text = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          onClick={(e) => console.log(e.target)}
                        >
                          {
                            text === 'currencyBox'
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
                              : text === 'outputButton'
                                ? (
                                  <ButtonComponent
                                    label="Вывод"
                                    color="secondary"
                                  />
                                )
                                : text
                          }
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box>
        <Typography variant="title" component="p" color="text.grey">Криптовалютный баланс</Typography>
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
    </Box>
  );
};

export default WalletPage;
