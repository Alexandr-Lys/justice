import React from 'react';
import {
  Autocomplete,
  Box,
  GlobalStyles,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Controller } from 'react-hook-form';

import { currencyNameStyles, selectPopperStyles, selectStyles } from '../Pages/MuiStyles';

const Select = ({
  currencyList,
  swapOptions,
  defaultValue,
  placeholder,
  setAutocompleteInput,
  setAutocompleteValue,
  autocompleteValue,
  autocompleteInput,
  image,
  placeholderStyle,
  setImage,
  control,
  name,
  errorText,
  setAmount,
  validation,
  typeSelect,
  defaultDisable,
  ...props
}) => {
  switch (typeSelect) {
    case 'validation':
      return (
        <>
          <GlobalStyles styles={selectPopperStyles} />
          <Controller
            control={control}
            name={name}
            render={({
              field: {
                onChange,
                onBlur,
                value,
              },
            }) => (
              <TextField
                {...props}
                type="number"
                onChange={onChange}
                onBlur={(e) => {
                  onBlur();
                  setAmount(e.target.value);
                }}
                value={value}
                error={!!errorText}
                helperText={errorText}
                sx={{
                  ...selectStyles,
                  ...placeholderStyle,
                }}
                placeholder={placeholder}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={image} alt="currency icon" />
                      <Autocomplete
                        componentsProps={{ popper: { className: 'Select' } }}
                        onChange={(e, newValue) => {
                          setAutocompleteValue(newValue);
                          setImage(e.currentTarget.firstChild.firstChild.attributes[0].value);
                        }}
                        freeSolo
                        value={autocompleteValue}
                        noOptionsText="Не найдено"
                        disableClearable
                        options={currencyList}
                        inputValue={autocompleteInput}
                        onInputChange={(_, newInput) => {
                          setAutocompleteInput(newInput);
                        }}
                        getOptionLabel={(option) => option.shortName}
                        renderOption={(prop, option) => (
                          <Box {...prop} component="li">
                            <Box sx={currencyNameStyles}>
                              <img src={option.img} alt="currency icon" />
                              <Typography component="h3">
                                {option.shortName}
                              </Typography>
                            </Box>
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField {...params} />
                        )}
                      />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            )}
          />
        </>
      );
    case 'disabled':
      return (
        <>
          <GlobalStyles styles={selectPopperStyles} />
          <TextField
            {...props}
            sx={{
              ...selectStyles,
              backgroundColor: '#1C2027',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              '& .Mui-disabled': {
                border: 'none',
                color: '#8C939D',
                textFillColor: '#8C939D',
              },
            }}
            placeholder={placeholder}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={image} alt="currency icon" />
                  <Autocomplete
                    disabled
                    componentsProps={{ popper: { className: 'Select' } }}
                    freeSolo
                    value={autocompleteValue}
                    noOptionsText="Не найдено"
                    disableClearable
                    options={currencyList}
                    inputValue={autocompleteInput}
                    onInputChange={(_, newInput) => {
                      setAutocompleteInput(newInput);
                    }}
                    getOptionLabel={(option) => option.shortName}
                    renderOption={(prop, option) => (
                      <Box {...prop} component="li">
                        <Box sx={currencyNameStyles}>
                          <img src={option.img} alt="currency icon" />
                          <Typography component="h3">
                            {option.shortName}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField {...params} />
                    )}
                  />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </>
      );
    default:
      return (
        <>
          <GlobalStyles styles={selectPopperStyles} />
          <TextField
            {...props}
            sx={{
              ...selectStyles,
              ...placeholderStyle,
            }}
            placeholder={placeholder}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={image} alt="currency icon" />
                  <Autocomplete
                    componentsProps={{ popper: { className: 'Select' } }}
                    freeSolo
                    value={autocompleteValue}
                    onChange={(e, newValue) => {
                      setAutocompleteValue(newValue);
                      setImage(e.currentTarget.firstChild.firstChild.attributes[0].value);
                    }}
                    noOptionsText="Не найдено"
                    disableClearable
                    options={currencyList}
                    inputValue={autocompleteInput}
                    onInputChange={(_, newInput) => {
                      setAutocompleteInput(newInput);
                    }}
                    getOptionLabel={(option) => option.shortName}
                    renderOption={(prop, option) => (
                      <Box {...prop} component="li">
                        <Box sx={currencyNameStyles}>
                          <img src={option.img} alt="currency icon" />
                          <Typography component="h3">
                            {option.shortName}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    renderInput={(params) => (
                      <TextField disabled sx={{ color: '#FFFFFF' }} {...params} />
                    )}
                  />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </>
      );
  }
};

export default Select;

