import React from 'react';
import {
  Autocomplete,
  Box, GlobalStyles, TextField, Typography,
} from '@mui/material';
import { currencyNameStyles } from '../Pages/MuiStyles';

import { ReactComponent as SearchIcon } from '../../assets/svg/SearchIcon.svg';

const SearchInput = ({
  rows, value, setValue, setOnFilter,
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
        maxHeight: '256px',
        '&::-webkit-scrollbar': {
          width: '4px',
          height: '48px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(255, 255, 255, 0.25)',
          borderRadius: '29px',
        },
        '& li': {
          width: '248px',
          minHeight: '64px !important',
          display: 'flex !important',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: 'transparent !important',
          ml: '16px',
          padding: '0 !important',
          '& img': {
            width: '24px',
          },
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
      options={rows}
      getOptionLabel={(option) => option.fullName}
      onInputChange={
        (e) => {
          const currencyName = e.currentTarget.firstChild?.lastChild?.textContent;
          if (currencyName) {
            setValue(rows.find((item) => currencyName === item.fullName));
            setOnFilter(true);
          } else {
            setOnFilter(false);
          }
        }
      }
      value={value}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          <Box sx={currencyNameStyles}>
            <img src={option.img} alt="currency icon" />
            <Typography component="h3">
              {option.shortName}
            </Typography>
            <Typography component="h4">
              {option.fullName}
            </Typography>
          </Box>
        </Box>
      )}
      renderInput={(params) => (
        <>
          <SearchIcon />
          <TextField {...params} placeholder="Поиск валюты" />
        </>
      )}
    />
  </>
);

export default SearchInput;
