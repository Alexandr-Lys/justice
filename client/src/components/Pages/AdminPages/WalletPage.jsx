import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box, CircularProgress,
  Typography,
} from '@mui/material';

import { addWallet } from '../../../store/asyncActions/data';
import ButtonComponent from '../../Buttons/ButtonComponent';
import { walletPageStyles } from '../MuiStyles';
import SearchInput from '../../Inputs/SearchInput';
import TableComponent from '../../Table/Table';

import RUB from '../../../assets/svg/criptorrency/CurrencyRUB.svg';
import USD from '../../../assets/svg/criptorrency/CurrencyUSD.svg';

const WalletPage = () => {
  const dispatch = useDispatch();
  const userId = window.localStorage.getItem('userId');
  useEffect(() => {
    dispatch(addWallet(userId));
  }, []);
  const cryptoList = useSelector((state) => state.currency);
  const currencyList = [
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
  const walletState = useSelector((state) => state.wallet);
  const { loading } = walletState;
  const wallet = walletState.data;
  const cryptoRowsModel = {
    name: 'currencyBox',
    total: 0,
    totalOrder: 0,
    available: 0,
    availableOrder: 0,
  };
  const cryptoRows = cryptoList.map((crypto) => {
    const current = wallet.find(
      (item) => item.currencyName === crypto.shortName || `${item.currencyName}T` === crypto.shortName,
    );
    return current
      ? {
        ...cryptoRowsModel,
        total: (current.amount).toFixed(2),
        available: (current.amount).toFixed(2),
        shortName: crypto.shortName,
        fullName: crypto.fullName,
        img: crypto.img,
      }
      : {
        ...crypto,
        ...cryptoRowsModel,
      };
  });
  const currencyRows = currencyList.map((currency) => {
    const current = wallet.find(
      (item) => currency.shortName === item.currencyName || `${currency.shortName}T` === item.currencyName,
    );
    return {
      ...currencyList[0],
      total: current?.amount.toFixed(2),
      available: current?.amount.toFixed(2),
      shortName: currency?.shortName,
      fullName: currency?.fullName,
      img: currency?.img,
    };
  });

  const columns = [
    { id: 'name', label: 'Название' },
    { id: 'total', label: 'Всего', minWidth: '120px' },
    { id: 'totalOrder', label: 'В ордере', minWidth: '120px' },
    { id: 'available', label: 'Доступно', minWidth: '120px' },
    { id: 'availableOrder', label: 'В ордере', minWidth: '120px' },
    { id: 'output' },
  ];
  const [value, setValue] = useState(cryptoRows[0]);
  const [onFilter, setOnFilter] = useState(false);

  const searchCurrency = useMemo(() => cryptoRows.find((obj) => obj.fullName === value.fullName), [value]);
  const paginationCount = useMemo(() => (onFilter ? 1 : cryptoRows.length), [onFilter, cryptoRows]);

  return (
    <Box sx={walletPageStyles}>
      { loading
        ? <CircularProgress color="inherit" />
        : (
          <>
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
                rows={cryptoRows}
                setValue={setValue}
                setOnFilter={setOnFilter}
              />
            </Box>
            <TableComponent rows={currencyRows} columns={columns} label="Фиатный и спотовый" />
            <TableComponent
              rows={cryptoRows}
              columns={columns}
              label="Криптовалютный баланс"
              filter={onFilter}
              pagination
              searchCurrency={searchCurrency}
              paginationCount={paginationCount}
              rowsPerPageOptions={[5, 10, 15]}
            />
          </>
        )}
      ;
    </Box>
  );
};

export default WalletPage;
