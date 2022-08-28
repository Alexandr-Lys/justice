import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from 'react-redux';

import { currencyInfoStyles } from '../Pages/MuiStyles';
import { addDataCryptoGraphAction } from '../../store/reducers/graphReducer';
import Select from '../Select/Select';
import { ReactComponent as Swap } from '../../assets/svg/Swap.svg';
import ButtonComponent from '../Buttons/ButtonComponent';
import Tag from '../Tags/Tag';
import Notification from '../Notification/Notification';

const CurrencyInfo = () => {
  const dispatch = useDispatch();
  const currencyStore = useSelector((state) => state.currency);
  const graphStore = useSelector((state) => state.graph);
  const graphData = graphStore.data;
  const dates = graphData.map((item, index) => index);
  const data = graphData.map((item) => [+item[4], +item[1], +item[3], +item[2]]);
  const volume = graphData.map((item, index, array) => [
    index,
    item[5],
    array[index - 1]
      ? array[index][4] > array[index - 1][4] ? 1 : -1
      : -1,
  ]);
  const getArrayDates = () => {
    const today = new Date();
    const datesArray = [];
    for (let i = 0; i < graphData.length; i++) {
      const newDate = new Date(today.setDate(today.getDate() - 1));
      datesArray.push(newDate);
    }
    return datesArray;
  };
  const arrayDates = getArrayDates().map(
    (item) => `${item.toDateString().split(' ')[2]} ${item.toDateString().split(' ')[1]}`,
  );
  const max = graphData.map((item, index) => [
    index,
    +item[4],
    arrayDates[index],
  ]);
  console.log(arrayDates);
  const colorData = volume[volume.length - 1][2] === 1 ? '#0ECB81' : '#EB6B6B';
  const option = {
    visualMap: {
      show: false,
      seriesIndex: 1,
      dimension: 2,
      pieces: [
        {
          value: -1,
          color: '#86303E',
          borderColor: '#86303E',
        },
        {
          value: 1,
          color: '#127350',
          borderColor: '#127350',
        },
      ],
    },
    axisPointer: {
      show: true,
      link: [
        {
          xAxisIndex: 'all',
        },
      ],
      label: {
        backgroundColor: '#272D37',
        color: '#FFFFFF',
      },
    },
    xAxis: [
      {
        show: true,
        type: 'category',
        data: dates,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
        axisPointer: {
          label: {
            show: false,
          },
        },
      },
      {
        show: true,
        type: 'category',
        data: dates,
        gridIndex: 1,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
        axisPointer: {
          label: {
            show: false,
          },
        },
      },
    ],
    yAxis: [
      {
        position: 'right',
        scale: true,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
      {
        position: 'right',
        scale: true,
        gridIndex: 1,
        axisLabel: { show: false },
        splitLine: { show: false },
      },
    ],
    grid: [
      {
        left: '10%',
        right: '8%',
        height: '65%',
      },
      {
        left: '10%',
        right: '8%',
        top: '74%',
        height: '6%',
      },
    ],
    dataZoom: [
      {
        show: false,
        xAxisIndex: [0, 1],
      },
      {
        type: 'inside',
        xAxisIndex: [0, 1],
      },
    ],
    series: [
      {
        type: 'candlestick',
        name: 'Day',
        data,
        itemStyle: {
          color: '#EB6B6B',
          color0: '#0ECB81',
          borderColor: '#EB6B6B',
          borderColor0: '#0ECB81',
        },
      },
      {
        type: 'bar',
        name: 'Volume',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: volume,
      },
    ],
  };
  const optionLine = {
    tooltip: {
      trigger: 'axis',
      formatter: (params) => `${params[0].data[1]}<br />${params[0].data[2]}`,
      backgroundColor: '#272D37',
      borderColor: '#272D37',
      textStyle: {
        color: '#FFFFFF',
      },
    },
    dataZoom: {
      type: 'inside',
      realtime: true,
    },
    visualMap: {
      show: false,
      type: 'continuous',
      seriesIndex: 0,
      min: 0,
      max: 400,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      axisPointer: {
        label: {
          show: false,
        },
        show: true,
      },
      data: arrayDates,
    },
    yAxis: {
      type: 'value',
      position: 'right',
      scale: true,
      splitLine: {
        show: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    series: [
      {
        showSymbol: false,
        data: max,
        type: 'line',
        areaStyle: {
          color: '#0ECB81',
          opacity: '0.15',
        },
        itemStyle: {
          color: '#0ECB81',
        },
        emphasis: {
          itemStyle: {
            color: '#0ECB81',
            borderColor: '#0ECB81',
          },
        },
      },
    ],
  };
  const todayGraphData = graphData[graphData.length - 1];

  const currentCryptoData = currencyStore.find((item) => item.shortName === graphStore.crypto);
  const currentCurrencyData = currencyStore.find((item) => item.shortName === graphStore.currency);

  const [interval, setInterval] = useState(graphStore.interval);

  const [controlValue, setControlValue] = useState(currentCurrencyData);
  const [controlInput, setControlInput] = useState(currentCurrencyData.shortName);
  const [imageControl, setImageControl] = useState(currentCurrencyData?.img);

  const [disValue, setDisValue] = useState(currentCryptoData);
  const [disInput, setDisInput] = useState(currentCryptoData.shortName);
  const [imageDis, setImageDis] = useState(currentCryptoData?.img);

  const dispatchCryptoGraph = async (time, currencyGet, cryptoGet) => {
    dispatch(await addDataCryptoGraphAction(cryptoGet, currencyGet, time, '100'));
  };
  useEffect(() => {
    dispatchCryptoGraph(interval, controlInput, disInput);
  }, [interval, controlInput, disInput]);
  const { currency, crypto } = graphStore;
  const onIntervalClick = (event) => {
    if (event.target.nodeName === 'P') {
      const childrenArray = Array.from(event.currentTarget.children);
      childrenArray.map((element) => element.classList.remove('active'));
      event.target.classList.add('active');
      setInterval(event.target.id);
    }
  };
  const cryptoToCurrency = todayGraphData[4];
  const currencyToRub = Number(currencyStore[4].price.replace(/^₽/g, '')) * cryptoToCurrency;

  const [totalValue, setTotalValue] = useState(0);

  const [balance, setBalance] = useState(22000);

  const [status, setStatus] = useState(-1);

  const [cryptoValue, setCryptoValue] = useState(0);

  return (
    <Box sx={currencyInfoStyles}>
      <Box>
        <Box>
          <Box>
            <Typography variant="h1">
              {`${crypto.toUpperCase()}/${currency.toUpperCase()}`}
            </Typography>
          </Box>
          <Box>
            <Typography variant="title">{Number(cryptoToCurrency).toFixed(2)}</Typography>
            <Typography variant="body1" color="text.grey">{`₽ ${Number(currencyToRub).toFixed(2)}`}</Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="text.grey">Изменение за 24ч</Typography>
            <Box sx={{ display: 'flex', gap: '4px' }}>
              <Typography sx={{ color: colorData }}>
                {currentCryptoData.change}
              </Typography>
              <Typography sx={{
                color: currentCurrencyData.change[0] === '-' ? '#EB6B6B' : '#0ECB81',
              }}
              >
                {currentCurrencyData.change}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1" color="text.grey">Макс 24ч</Typography>
            <Typography>{Number(todayGraphData[2]).toFixed(2)}</Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="text.grey">
              {`Объем за 24ч (${currentCryptoData.shortName})`}
            </Typography>
            <Typography>
              {currentCryptoData.volume}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" color="text.grey">
              {`Объем за 24ч (${currentCurrencyData.shortName})`}
            </Typography>
            <Typography>{currentCurrencyData.volume}</Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box>
              <Typography
                variant="body1"
                color="text.grey"
              >
                {(new Date()).toISOString().slice(0, 10).replace(/-/g, '/')}
              </Typography>
              <Box>
                <Typography variant="body1" color="text.grey">Открыть:</Typography>
                <Typography variant="body1" sx={{ color: colorData }}>
                  {Number(todayGraphData[4]).toFixed(2)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="text.grey">Максимум:</Typography>
                <Typography variant="body1" sx={{ color: colorData }}>
                  {Number(todayGraphData[2]).toFixed(2)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="text.grey">Минимум:</Typography>
                <Typography variant="body1" sx={{ color: colorData }}>
                  {Number(todayGraphData[1]).toFixed(2)}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" color="text.grey">ИЗМ:</Typography>
                <Typography variant="body1" sx={{ color: colorData }}>
                  {currentCryptoData.change}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="body1" color="text.grey">Время</Typography>
              <Box onClick={(e) => onIntervalClick(e)}>
                <Typography id="30m" variant="body1" color="text.grey">30М</Typography>
                <Typography id="1h" variant="body1" color="text.grey">1Ч</Typography>
                <Typography id="1d" variant="body1" color="text.grey" className="active">1Д</Typography>
                <Typography id="1M" variant="body1" color="text.grey">1М</Typography>
              </Box>
            </Box>
          </Box>
          {false
            ? (
              <ReactECharts
                option={option}
                style={{
                  width: '875px',
                  height: '681px',
                  position: 'absolute',
                  top: '10px',
                  left: '-86px',
                  zIndex: 1,
                }}
              />
            )
            : (
              <ReactECharts
                option={optionLine}
                style={{
                  width: '875px',
                  height: '681px',
                  position: 'absolute',
                  top: '10px',
                  left: '-86px',
                  zIndex: 1,
                }}
              />
            )}
        </Box>
      </Box>
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
          onClick={(e) => {
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
              setTotalValue(result);
              setCryptoValue(result / cryptoToCurrency);
            }
          }}
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
          onClick={() => {
            const result = balance - totalValue;
            if (result >= 0) {
              setBalance(result);
              setStatus(1);
            } else {
              setStatus(0);
            }
          }}
        />
        <Notification status={status} size="small" />
      </Box>
    </Box>
  );
};

export default CurrencyInfo;
