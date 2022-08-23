import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Typography, Box } from '@mui/material';

import SearchInput from '../../Inputs/SearchInput';
import { marketsPageStyles } from '../MuiStyles';
import TableComponent from '../../Table/Table';

const MarketsPage = () => {
  const rows = useSelector((state) => state.currency);
  const columns = [
    { id: 'name', label: 'Название', minWidth: 170 },
    { id: 'price', label: 'Цена', minWidth: 100 },
    { id: 'change', label: 'Изм за 24ч', minWidth: 170 },
    { id: 'volume', label: 'Объем за 24ч', minWidth: 170 },
    { id: 'capitalize', label: 'Капитализация', minWidth: 170 },
    { id: 'trade' },
  ];
  const [value, setValue] = useState(rows[0]);
  const [onFilter, setOnFilter] = useState(false);

  const searchCurrency = useMemo(() => rows.find((obj) => obj.fullName === value.fullName), [value]);
  const paginationCount = useMemo(() => (onFilter ? 1 : rows.length), [onFilter, rows]);

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
      <TableComponent
        rows={rows}
        columns={columns}
        filter={onFilter}
        pagination
        paginationCount={paginationCount}
        rowsPerPageOptions={[5, 10, 15]}
        searchCurrency={searchCurrency}
      />
    </Box>

  );
};

export default MarketsPage;
