import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { currencyInfoStyles } from '../Pages/MuiStyles';
import Chart from './components/Chart';
import PayForm from './components/PayForm';
import { getCryptoGraph } from '../../store/asyncActions/data';

const CurrencyInfo = () => {
  const [typeChart, setTypeChart] = useState(1);
  const graphStore = useSelector((state) => state.graph.data);
  const loading = useSelector((state) => state.graph.loading);
  const [interval, setInterval] = useState(graphStore.interval);
  const dispatch = useDispatch();
  // const dispatchCryptoGraph = async (time, currencyGet, cryptoGet, limit) => {
  //   dispatch(await addDataCryptoGraphAction(cryptoGet, currencyGet, time, limit));
  // };
  // dispatchCryptoGraph(interval, graphStore.currency, graphStore.crypto, graphStore.limit);
  useEffect(() => {
    dispatch(getCryptoGraph(graphStore.crypto, graphStore.currency, interval, graphStore.limit));
  }, [interval]);
  const currencyStore = useSelector((state) => state.currency);
  const graphData = graphStore.data;
  useEffect(() => {
    console.log(graphData);
  }, [loading]);
  console.log(graphData);
  const todayGraphData = graphData[graphData.length - 1];
  const colorData = todayGraphData[4] > graphData[graphData.length - 2][4] ? '#0ECB81' : '#EB6B6B';

  const { currency, crypto } = graphStore;
  const currentCryptoData = currencyStore.find((item) => item.shortName === crypto);
  const currentCurrencyData = currencyStore.find((item) => item.shortName === currency);

  const onIntervalClick = (event) => {
    if (event.target.nodeName === 'P') {
      const childrenArray = Array.from(event.currentTarget.children);
      childrenArray.map((element) => element.classList.remove('active'));
      event.target.classList.add('active');
      setInterval(event.target.id);
    }
  };
  const cryptoToCurrency = Number(todayGraphData[4]).toFixed(2);
  const currencyToRub = Number(currencyStore[4].price.replace(/^₽/g, '')) * cryptoToCurrency;

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
            <Box onClick={() => {
              if (typeChart) {
                setTypeChart(0);
              } else {
                setTypeChart(1);
              }
            }}
            >
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
              <Box onClick={onIntervalClick}>
                <Typography id="30m" variant="body1" color="text.grey">30М</Typography>
                <Typography id="1h" variant="body1" color="text.grey">1Ч</Typography>
                <Typography id="1d" variant="body1" color="text.grey" className="active">1Д</Typography>
                <Typography id="1M" variant="body1" color="text.grey">1М</Typography>
              </Box>
            </Box>
          </Box>
          <Chart typeChart={typeChart} />
        </Box>
      </Box>
      <PayForm
        currencyStore={currencyStore}
        currentCryptoData={currentCryptoData}
        currentCurrencyData={currentCurrencyData}
        cryptoToCurrency={cryptoToCurrency}
      />
    </Box>
  );
};

export default CurrencyInfo;
