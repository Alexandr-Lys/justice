import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import ButtonComponent from '../../Buttons/ButtonComponent';
import Select from '../../Select/Select';
import Notification from '../../Notification/Notification';
import { convertPageStyles } from '../MuiStyles';
import { receiveTransfer } from '../../../store/asyncActions/data';

import { ReactComponent as Swap } from '../../../assets/svg/Swap.svg';

const ConvertPage = () => {
  const dispatch = useDispatch();
  const currencyList = useSelector((state) => state.currency);
  const convert = useSelector((state) => state.convert);

  const [amount, setAmount] = useState(0);

  const [controlValue, setControlValue] = useState(currencyList[0]);
  const [controlInput, setControlInput] = useState('BTC');
  const [imageControl, setImageControl] = useState(currencyList[0].img);

  const [disValue, setDisValue] = useState(currencyList[1]);
  const [disInput, setDisInput] = useState('ETH');
  const [imageDis, setImageDis] = useState(currencyList[1].img);

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
              onBlur={(e) => setAmount(e.target.value)}
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
              value={convert.transfer}
              placeholderStyle={{
                '& input.Mui-disabled': {
                  textFillColor: '#FFFFFF',
                },
              }}
            />
          </Box>
          <ButtonComponent
            color="primary"
            label="Конвертировать"
            onClick={() => dispatch(receiveTransfer(amount, controlInput, disInput))}
          />
        </Box>
        <Box>
          <Box>
            <Typography variant="subtitle">Цена</Typography>
            <Typography variant="subtitleLight">{convert.course}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle">Обратный курс</Typography>
            <Typography variant="subtitleLight">{convert.reverseCourse}</Typography>
          </Box>
          <Box>
            <Typography variant="subtitle">Вы получите</Typography>
            <Typography variant="subtitleLight">{convert.transfer}</Typography>
          </Box>
          <Notification status="error" />
        </Box>
      </Box>
    </Box>
  );
};

export default ConvertPage;
