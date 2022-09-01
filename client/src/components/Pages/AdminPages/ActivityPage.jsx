import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Typography,
} from '@mui/material';

import { activityPage } from '../MuiStyles';
import TableComponent from '../../Table/Table';
import { addHistory } from '../../../store/asyncActions/data';

const ActivityPage = () => {
  const dispatch = useDispatch();
  const userId = window.localStorage.getItem('userId');
  useEffect(() => {
    addHistory(userId, dispatch);
  }, []);
  const history = useSelector((state) => state.history);
  const currencyList = useSelector((state) => state.currency);
  const columns = [
    { id: 'activeGive', label: 'Актив', minWidth: '120px' },
    { id: 'swapImg' },
    { id: 'activeGet', minWidth: '120px' },
    { id: 'give', label: 'Отдал', minWidth: '120px' },
    { id: 'get', label: 'Получил', minWidth: '120px' },
    { id: 'time', label: 'Время', minWidth: '120px' },
    { id: 'status', label: 'Статус' },
  ];
  const rowsModel = {
    activeGive: 'currencyBoxGive',
    swapImg: 'swap',
    activeGet: 'currencyBoxGet',
    status: 'status',
  };
  const rows = history.map((item) => {
    const giveCurrencyData = currencyList.find((currencyItem) => currencyItem.shortName === item.giveCurrency);
    const getCurrencyData = currencyList.find((currencyItem) => currencyItem.shortName === item.getCurrency);
    return {
      ...rowsModel,
      give: item.give.toFixed(2),
      get: item.get.toFixed(2),
      time: item.time,
      statusText: item.status,
      shortNameGive: item.giveCurrency,
      shortNameGet: item.getCurrency,
      fullNameGive: giveCurrencyData.fullName,
      fullNameGet: getCurrencyData.fullName,
      giveImg: giveCurrencyData.img,
      getImg: getCurrencyData.img,
    };
  });

  return (
    <Box sx={activityPage}>
      <Box>
        <Typography variant="h2" component="h1">Транзакции</Typography>
      </Box>
      <TableComponent
        rows={rows}
        columns={columns}
        pagination
        paginationCount={rows.length}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </Box>
  );
};

export default ActivityPage;
