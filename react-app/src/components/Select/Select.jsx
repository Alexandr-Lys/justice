import React, { useState } from 'react';
import {
  Autocomplete, Box, Input, InputAdornment, TextField,
} from '@mui/material';
import CurrencyName from '../CurrencyName';
import BTC from '../../icons/Bitcoin.png';
import './SelectStyle.css';

const Select = ({ currencyList }) => {
  const [image, setImage] = useState(BTC);
  return (
    <Input
      sx={{
        pl: '10px',
        width: '332px',
        color: '#FFFFFF',
        caretColor: '#FFFFFF',
        backgroundColor: 'transparent',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        '&:before': {
          display: 'none',
        },
        '&:after': {
          display: 'none',
        },
        '&.Mui-focused': {
          borderColor: '#8391FF',
        },
      }}
      placeholder="Кол-во"
      endAdornment={(
        <InputAdornment
          position="end"
          sx={{
            backgroundColor: 'transparent',
            color: '#FFFFFF',
            width: '93px',
            p: '0 13px 0 0',
            m: '0',
            '& img': {
              width: '24px',
            },
          }}
        >
          <img src={image} alt="" />
          <Autocomplete
            onChange={(e) => {
              setImage(e.currentTarget.firstChild.firstChild.attributes[0].value);
            }}
            defaultValue="BTC"
            sx={{
              p: '0',
              m: '0',
              backgroundColor: 'transparent',
              '& fieldset': {
                display: 'none',
              },
              '& .css-1cysxy2-MuiInputBase-root-MuiOutlinedInput-root': {
                color: '#FFFFFF',
                fontSize: '0.9rem',
              },
              // eslint-disable-next-line max-len
              '& .css-w2djx7-MuiAutocomplete-root': {
                padding: '0',
              },
              '& button': {
                color: 'white',
              },

            }}
            disableClearable
            options={currencyList}
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
                <CurrencyName image={option.img} currencyShort={option.label} />
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                sx={{ backgroundColor: 'transparent' }}
                {...params}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
        </InputAdornment>
        )}
    />
  );
};

// <Autocomplete
//   id="country-select-demo"
//   sx={{ width: 300 }}
//   options={[{ label: 'BTC', urlImg: '../../Bitcoin.png' },
//     { label: 'ETH', urlImg: '../../Bitcoin.png' }]}
//   autoHighlight
//   getOptionLabel={(option) => option.label}
//   renderOption={(props, option) => (
//     <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
//       <img
//         loading="lazy"
//         width="20"
//         src="../../Bitcoin.png"
//         srcSet="../../Bitcoin.png"
//         alt=""
//       />
//       {option.label}
//     </Box>
//   )}
//   renderInput={(params) => (
//     <TextField
//       {...params}
//       label="Choose a country"
//       inputProps={{
//         ...params.inputProps,
//         autoComplete: 'new-password', // disable autocomplete and autofill
//       }}
//     />
//   )}
// />

export default Select;
// { value, currency }

