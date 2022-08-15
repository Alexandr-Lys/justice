import React from 'react';
import {
  Autocomplete,
  Box, GlobalStyles, TextField,
} from '@mui/material';

import CurrencyName from '../CurrencyName';

import { ReactComponent as SearchIcon } from '../../assets/svg/SearchIcon.svg';

const SearchInput = ({
  currencyList, value, setValue, setOnFilter,
}) => (
  <>
    <GlobalStyles styles={{
      '& input, & input::placeholder': {
        color: '#FFFFFF !important',
      },
      '&.Search': {
        width: '280px !important',
        left: '-12px !important',
        '&>div': {
          backgroundColor: '#191F29',
        },
      },
      '&.Search ul': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& li': {
          width: '248px',
          height: '64px',
          display: 'flex !important',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: 'transparent !important',
        },
      },
    }}
    />
    <Autocomplete
      componentsProps={{ popper: { className: 'Search' } }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: '0',
        m: '0',
        backgroundColor: 'transparent',
        width: '280px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '3px',
        '&.Mui-focused svg path': {
          pl: '10px',
          stroke: 'white',
        },
        '& svg': {
          pl: '10px',
        },
        '& .MuiAutocomplete-popupIndicator': {
          display: 'none',
        },
        '& fieldset': {
          display: 'none',
        },
        '& .css-1cysxy2-MuiInputBase-root-MuiOutlinedInput-root': {
          color: '#FFFFFF',
          fontSize: '0.9rem',
        },
        '& .css-w2djx7-MuiAutocomplete-root': {
          padding: '0',
        },
        '& button': {
          color: 'white',
        },

      }}
      options={currencyList}
      getOptionLabel={(option) => option.fullName}
      onInputChange={
        (e) => {
          const currencyName = e.currentTarget.firstChild?.lastChild?.textContent;
          if (currencyName) {
            setValue(currencyList.find((item) => currencyName === item.fullName));
            setOnFilter(true);
          } else {
            setOnFilter(false);
          }
        }
      }
      value={value}
      renderOption={(props, option) => (
        <Box
          component="li"
          {...props}
          sx={{
            display: 'block !important',
            backgroundColor: 'transparent',
            ml: '16px',
            width: '65px',
            padding: '0 !important',
            '& img': {
              width: '24px',
            },
            '& p': {
              fontSize: '0.8rem !important',
            },
          }}
        >
          <CurrencyName currency={option} />
        </Box>
      )}
      renderInput={(params) => (
        <>
          <SearchIcon />
          <TextField
            sx={{ backgroundColor: 'transparent' }}
            {...params}
            placeholder="Поиск валюты"
          />
        </>
      )}
    />
  </>
);

export default SearchInput;
