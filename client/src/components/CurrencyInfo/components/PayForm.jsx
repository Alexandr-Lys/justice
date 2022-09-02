import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import Select from '../../Select/Select';
import Tag from '../../Tags/Tag';
import ButtonComponent from '../../Buttons/ButtonComponent';
import Notification from '../../Notification/Notification';
import { createPayHistory } from '../../../api/history';

import { ReactComponent as Swap } from '../../../assets/svg/Swap.svg';
import { updateWalletPay } from '../../../api/wallet';
import { addWallet, getCryptoGraph } from '../../../store/asyncActions/data';
import { payFormStyles } from '../../Pages/MuiStyles';

const PayForm = ({
  currentCryptoData,
  currentCurrencyData,
  currencyStore,
  cryptoToCurrency,
}) => {
  const userId = window.localStorage.getItem('userId');
  const dispatch = useDispatch();
  const { interval, limit } = useSelector((state) => state.graph);
  const [controlValue, setControlValue] = useState(currentCurrencyData);
  const [controlInput, setControlInput] = useState(currentCurrencyData.shortName);
  const [imageControl, setImageControl] = useState(currentCurrencyData?.img);

  const [disValue, setDisValue] = useState(currentCryptoData);
  const [disInput, setDisInput] = useState(currentCryptoData.shortName);
  const [imageDis, setImageDis] = useState(currentCryptoData?.img);

  const walletState = useSelector((state) => state.wallet);
  const wallet = useSelector((state) => state.wallet.data);

  const [balance, setBalance] = useState(0);

  const [totalValue, setTotalValue] = useState(0);

  const [status, setStatus] = useState(-1);

  const [cryptoValue, setCryptoValue] = useState(0);

  useEffect(() => {
    const walletCurrency = wallet.find((item) => item.currencyName === controlInput);
    setBalance(walletCurrency?.amount);
  }, [wallet]);

  useEffect(() => {
    dispatch(getCryptoGraph(disInput, controlInput, interval, limit));
  }, [controlInput, disInput]);

  useEffect(() => {
    dispatch(addWallet(userId));
  }, []);

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
      const result = (Number(e.target.innerHTML.replace('%', '')) * balance) / 100;
      const input = e.target
        .parentElement
        .parentElement
        .previousSibling
        .lastChild
        .firstChild
        .firstChild;
      input.value = (result / cryptoToCurrency).toFixed(2);
      setCryptoValue(result / cryptoToCurrency);
      setTotalValue(result);
    }
  };

  const payCrypto = async () => {
    const result = balance - totalValue;
    if (result >= 0) {
      setBalance(result);
      setStatus(1);
      await createPayHistory(totalValue, cryptoValue, controlInput, disInput, userId);
      await updateWalletPay(totalValue, cryptoValue, controlInput, disInput, userId);
    } else {
      setStatus(0);
    }
  };
  return (
    <Box>
      {
      walletState.loading
        ? (<CircularProgress color="inherit" />)
        : (
          <Box sx={payFormStyles}>
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
                  setCryptoValue(Number(e.target.value));
                }}
                currencyList={currencyStore}
                defaultValue={disValue}
                autocompleteValue={disValue}
                setAutocompleteValue={setDisValue}
                autocompleteInput={disInput}
                setAutocompleteInput={setDisInput}
                image={imageDis}
                setImage={setImageDis}
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
                currencyList={[currencyStore[4]]}
                value={totalValue.toFixed(2)}
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
        )
    }
    </Box>
  );
};

export default PayForm;
