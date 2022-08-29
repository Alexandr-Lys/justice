import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { addDataCryptoGraphAction } from '../../../store/reducers/graphReducer';
import Select from '../../Select/Select';
import Tag from '../../Tags/Tag';
import ButtonComponent from '../../Buttons/ButtonComponent';
import Notification from '../../Notification/Notification';

import { ReactComponent as Swap } from '../../../assets/svg/Swap.svg';

const PayForm = ({
  currentCryptoData,
  currentCurrencyData,
  currencyStore,
  cryptoToCurrency,
}) => {
  const dispatch = useDispatch();
  const { interval, limit } = useSelector((state) => state.graph);
  const [controlValue, setControlValue] = useState(currentCurrencyData);
  const [controlInput, setControlInput] = useState(currentCurrencyData.shortName);
  const [imageControl, setImageControl] = useState(currentCurrencyData?.img);

  const [disValue, setDisValue] = useState(currentCryptoData);
  const [disInput, setDisInput] = useState(currentCryptoData.shortName);
  const [imageDis, setImageDis] = useState(currentCryptoData?.img);

  const dispatchCryptoGraph = async (timeInterval, currencyGet, cryptoGet, dataLimit) => {
    dispatch(await addDataCryptoGraphAction(cryptoGet, currencyGet, timeInterval, dataLimit));
  };
  useEffect(() => {
    dispatchCryptoGraph(interval, controlInput, disInput, limit);
  }, [controlInput, disInput]);

  const [totalValue, setTotalValue] = useState(0);

  const [balance, setBalance] = useState(22000);

  const [status, setStatus] = useState(-1);

  const [cryptoValue, setCryptoValue] = useState(0);

  const swapInputs = () => {
    const temp = {
      controlValue,
      imageControl,
    };
    setControlValue(disValue);
    setDisValue(temp.controlValue);
    setImageControl(imageDis);
    setImageDis(temp.imageControl);
  };

  const onTagClick = (e) => {
    if (e.target.innerHTML.length < 6) {
      const inputValue = e.target
        .parentElement
        .parentElement
        .previousSibling
        .lastChild
        .firstChild
        .firstChild
        .value;
      if (inputValue) {
        e.target
          .parentElement
          .parentElement
          .previousSibling
          .lastChild
          .firstChild
          .firstChild
          .value = '';
      }
      const result = (Number(e.target.innerHTML.replace('%', '')) * balance) / 100;
      setTotalValue(result.toFixed(2));
      setCryptoValue(result / cryptoToCurrency);
    }
  };

  const payCrypto = () => {
    const result = balance - totalValue;
    if (result >= 0) {
      setBalance(result);
      setStatus(1);
    } else {
      setStatus(0);
    }
  };

  return (
    <Box>
      <Box>
        <Typography variant="subtitle">Отдаю</Typography>
        <Select
          disabled
          currencyList={currencyStore}
          value={cryptoToCurrency}
          placeholder="Цена"
          setAutocompleteValue={setControlValue}
          setAutocompleteInput={setControlInput}
          autocompleteValue={controlValue}
          autocompleteInput={controlInput}
          image={imageControl}
          setImage={setImageControl}
          placeholderStyle={{
            '& input.Mui-disabled': {
              textFillColor: '#FFFFFF',
            },
          }}
          typeSelect
        />
      </Box>
      <Swap onClick={swapInputs} />
      <Box>
        <Typography variant="subtitle">Получаю</Typography>
        <Select
          onBlur={(e) => {
            setTotalValue(e.target.value * cryptoToCurrency);
          }}
          currencyList={currencyStore}
          defaultValue={disValue}
          autocompleteValue={disValue}
          setAutocompleteValue={setDisValue}
          autocompleteInput={disInput}
          setAutocompleteInput={setDisInput}
          image={imageDis}
          setImage={setImageDis}
          placeholder={cryptoValue}
          placeholderStyle={{
            '& input': {
              '&::placeholder': {
                color: '#FFFFFF',
                opacity: 1,
              },
            },
          }}
          typeSelect
        />
      </Box>
      <Box
        className="tags"
        onClick={onTagClick}
      >
        <Tag tagValue="25%" />
        <Tag tagValue="50%" />
        <Tag tagValue="75%" />
        <Tag tagValue="100%" />
      </Box>
      <Box>
        <Select
          disabled
          currencyList={currencyStore}
          value={totalValue}
          placeholder="Всего"
          setAutocompleteValue={setControlValue}
          setAutocompleteInput={setControlInput}
          autocompleteValue={controlValue}
          autocompleteInput={controlInput}
          image={imageControl}
          setImage={setImageControl}
          placeholderStyle={{
            '& input.Mui-disabled': {
              textFillColor: '#FFFFFF',
            },
          }}
          typeSelect
        />
      </Box>
      <Box className="balance">
        <Typography variant="body1" color="text.grey">Доступно</Typography>
        <Typography variant="body1" color="text.grey">{Number(balance).toFixed(2)}</Typography>
      </Box>
      <ButtonComponent
        className="buy-button"
        size="large"
        color="buy"
        label={`Купить ${currentCryptoData.shortName}`}
        onClick={payCrypto}
      />
      <Notification status={status} size="small" />
    </Box>
  );
};

export default PayForm;
