import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import axios from 'axios';

import ButtonComponent from '../../Buttons/ButtonComponent';
import Select from '../../Select/Select';
import Notification from '../../Notification/Notification';
import { convertPageStyles } from '../MuiStyles';

import { ReactComponent as Swap } from '../../../assets/svg/Swap.svg';

const ConvertPage = () => {
  const currencyList = useSelector((state) => state.currency);

  const [amountOf, setAmountOf] = useState(0);

  const [course, setCourse] = useState('Введите данные');
  const [reverseCourse, setReverseCourse] = useState('Введите данные');
  const [fullResult, setFullResult] = useState('0');

  const [controlValue, setControlValue] = useState(currencyList[0]);
  const [controlInput, setControlInput] = useState('BTC');
  const [imageControl, setImageControl] = useState(currencyList[0].img);

  const [disValue, setDisValue] = useState(currencyList[1]);
  const [disInput, setDisInput] = useState('ETH');
  const [imageDis, setImageDis] = useState(currencyList[1].img);

  const setCalculateData = (data, amount, currencyOf, currencyReceive) => {
    setCourse(`1 ${currencyOf} = ${data[currencyReceive]} ${currencyReceive}`);
    setReverseCourse(`1 ${currencyReceive} = ${1 / data[currencyReceive]} ${currencyOf}`);
    setFullResult(`${data[currencyReceive] * amount} ${currencyReceive}`);
  };

  const receiveTransfer = async (amount, currencyOf, currencyReceive) => {
    await axios.get(
      // eslint-disable-next-line max-len
      `https://min-api.cryptocompare.com/data/price?fsym=${currencyOf}&tsyms=${currencyReceive}`,
      {
        headers: {
          authorization: 'f2d35bf334e29ba06a14f9809cdefc9a7e9a4ae3fbd10c4f75ccada266aaccfe',
        },
      },
    )
      .then((response) => setCalculateData(response.data, amount, currencyOf, currencyReceive));
  };

  return (
    <Box sx={convertPageStyles}>
      <Typography variant="h2" component="h1">Конвертер</Typography>
      <Box>
        <Box>
          <Box>
            <Typography variant="subtitle">Отдаю</Typography>
            <Select
              type="number"
              currencyList={currencyList}
              defaultValue={currencyList[0]}
              onBlur={(e) => setAmountOf(e.target.value)}
              placeholder="Кол-во"
              setAutocompleteValue={setControlValue}
              setAutocompleteInput={setControlInput}
              autocompleteValue={controlValue}
              autocompleteInput={controlInput}
              image={imageControl}
              setImage={setImageControl}
            />
          </Box>
          <Swap onClick={() => {
            const temp = {
              controlValue,
              imageControl,
            };
            setControlValue(disValue);
            setDisValue(temp.controlValue);
            setImageControl(imageDis);
            setImageDis(temp.imageControl);
          }}
          />
          <Box>
            <Typography variant="subtitle">Получаю</Typography>
            <Select
              disabled
              currencyList={currencyList}
              defaultValue={currencyList[1]}
              autocompleteValue={disValue}
              setAutocompleteValue={setDisValue}
              autocompleteInput={disInput}
              setAutocompleteInput={setDisInput}
              image={imageDis}
              setImage={setImageDis}
            />
          </Box>
          <ButtonComponent
            color="primary"
            label="Конвертировать"
            onClick={() => receiveTransfer(amountOf, controlInput, disInput)}
          />
        </Box>
        <Box>
          <Box>
            <Typography variant="subtitle">Цена</Typography>
            <Typography variant="subtitleLight">{course}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle">Обратный курс</Typography>
            <Typography variant="subtitleLight">{reverseCourse}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle">Вы получите</Typography>
            <Typography variant="subtitleLight">{fullResult}</Typography>
          </Box>
          <Notification status="error" />
        </Box>
      </Box>
    </Box>
  );
};

export default ConvertPage;
