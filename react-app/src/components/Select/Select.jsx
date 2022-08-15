import React, { useState } from 'react';
import {
  Autocomplete, Box, GlobalStyles, Input, InputAdornment, TextField, Typography,
} from '@mui/material';

import BTC from '../../assets/icons/criptorrency/Bitcoin.png';

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
          <GlobalStyles styles={{
            '&.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper': {
              backgroundColor: '#191F29 !important',
              color: '#FFFFFF !important',
            },
            '&.Select li': {
              margin: '0',
              width: '77px',
              height: '56px',
              display: 'flex !important',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            },
            '&.css-17mla5t-MuiAutocomplete-listbox .MuiAutocomplete-option[aria-selected="true"]': {
              backgroundColor: '#191F29 !important',
            },
            '&.Select ul': {
              backgroundColor: '#191F29',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            },
          }}
          />
          <Autocomplete
            componentsProps={{ popper: { className: 'Select' } }}
            onChange={(e) => {
              setImage(e.currentTarget.firstChild.firstChild.attributes[0].value);
            }}
            defaultValue={currencyList[0].shortName}
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
                  padding: '0 !important',
                  mb: '20px',
                  '& img': {
                    width: '24px',
                  },
                  '& p': {
                    fontSize: '0.8rem !important',
                  },
                }}
              >
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderRadius: '3px',
                  backgroundColor: 'transparent',
                  padding: '2px',
                  '& h3': {
                    color: '#FFFFFF',
                    fontSize: '14px',
                  },
                  '& h4': {
                    color: '#FFFFFF',
                    opacity: '0.7',
                    fontSize: '11px',
                  },
                }}
                >
                  <img src={option.img} alt="" />
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

export default Select;

