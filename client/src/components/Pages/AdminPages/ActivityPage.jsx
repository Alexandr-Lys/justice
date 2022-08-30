import React from 'react';
import {
  Box, Typography,
} from '@mui/material';

import { activityPage } from '../MuiStyles';
import TableComponent from '../../Table/Table';

import USDT from '../../../assets/svg/criptorrency/CryptocurrencyUSDT.svg';
import ADA from '../../../assets/svg/criptorrency/CryptocurrencyADA.svg';

const ActivityPage = () => {
  const columns = [
    { id: 'activeGive', label: 'Актив', minWidth: '120px' },
    { id: 'swapImg' },
    { id: 'activeGet', minWidth: '120px' },
    { id: 'give', label: 'Отдал', minWidth: '120px' },
    { id: 'get', label: 'Получил', minWidth: '120px' },
    { id: 'time', label: 'Время', minWidth: '120px' },
    { id: 'status', label: 'Статус' },
  ];
  const rows = [
    {
      activeGive: 'currencyBoxGive',
      swapImg: 'swap',
      activeGet: 'currencyBoxGet',
      give: 0,
      get: 0,
      time: 0,
      status: 'status',
      statusText: 'В обработке',
      shortNameGive: 'USDT',
      shortNameGet: 'ADA',
      fullNameGive: 'TetherUS',
      fullNameGet: 'Cardano',
      giveImg: USDT,
      getImg: ADA,
    },
    {
      activeGive: 'currencyBoxGive',
      swapImg: 'swap',
      activeGet: 'currencyBoxGet',
      give: 0,
      get: 0,
      time: 0,
      status: 'status',
      statusText: 'Отклонено',
      shortNameGive: 'USDT',
      shortNameGet: 'ADA',
      fullNameGive: 'TetherUS',
      fullNameGet: 'Cardano',
      giveImg: USDT,
      getImg: ADA,
    },
    {
      activeGive: 'currencyBoxGive',
      swapImg: 'swap',
      activeGet: 'currencyBoxGet',
      give: 0,
      get: 0,
      time: 0,
      status: 'status',
      statusText: 'Успешно',
      shortNameGive: 'USDT',
      shortNameGet: 'ADA',
      fullNameGive: 'TetherUS',
      fullNameGet: 'Cardano',
      giveImg: USDT,
      getImg: ADA,
    },
  ];

  return (
    <Box sx={activityPage}>
      <Box>
        <Typography variant="h2" component="h1">Транзакции</Typography>
      </Box>
      <TableComponent
        rows={rows}
        columns={columns}
        pagination
        paginationCount={1}
        page={1}
        rowsPerPageOptions={[1]}
      />
    </Box>
  );
};

export default ActivityPage;
