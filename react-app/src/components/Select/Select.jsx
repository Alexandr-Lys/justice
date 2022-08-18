import React from 'react';
import {
  Autocomplete,
  Box,
  GlobalStyles,
  Input,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import { currencyNameStyles, selectInputStyles, selectPopperStyles } from '../Pages/MuiStyles';

const Select = ({
  currencyList,
  setAmount,
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
  ...props
}) => (
  <>
    <GlobalStyles styles={selectPopperStyles} />
    <Input
      {...props}
      sx={{
        ...selectInputStyles,
        ...placeholderStyle,
      }}
      placeholder={placeholder}
      endAdornment={(
        <InputAdornment position="end">
          <img src={image} alt="currency icon" />
          <Autocomplete
            componentsProps={{ popper: { className: 'Select' } }}
            onChange={(e, newValue) => {
              setAutocompleteValue(newValue);
              setImage(e.currentTarget.firstChild.firstChild.attributes[0].value);
              if (setAmount) {
                setAmount(e.currentTarget.firstChild.lastChild.innerHTML);
              }
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
        )}
    />
  </>
);

export default Select;

