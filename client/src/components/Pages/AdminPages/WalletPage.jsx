import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
} from '@mui/material';

import ButtonComponent from '../../Buttons/ButtonComponent';
import { walletPageStyles } from '../MuiStyles';
import SearchInput from '../../Inputs/SearchInput';
import TableComponent from '../../Table/Table';

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
  const [value, setValue] = useState(rows[0]);
  const [onFilter, setOnFilter] = useState(false);

  const searchCurrency = useMemo(() => rows.find((obj) => obj.fullName === value.fullName), [value]);
  const paginationCount = useMemo(() => (onFilter ? 1 : rows.length), [onFilter, rows]);

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
      <TableComponent rows={rowsFiat} columns={columns} label="Фиатный и спотовый" />
      <TableComponent
        rows={rows}
        columns={columns}
        label="Криптовалютный баланс"
        filter={onFilter}
        pagination
        searchCurrency={searchCurrency}
        paginationCount={paginationCount}
      />
    </Box>
  );
};

export default WalletPage;
