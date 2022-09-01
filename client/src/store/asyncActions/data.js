import axios from 'axios';

import { addDataCurrencyAction } from '../reducers/currencyReducer';
import { currencyList, getCurrencyList } from '../../api/currency';
import { addDataTransferAction } from '../reducers/convertReducer';
import { addDataHistoryAction } from '../actions/actions';

export const getApiDataCurrency = (dispatch) => {
  axios.get(
    // eslint-disable-next-line max-len
    'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,ADA,USDT,LTC,ETN,ETC,NEO,LINK,ENG,ARNX,XLM,RVN,NPXS,PIVX,NAS,PPC&tsyms=RUB',
    {
      headers: {
        authorization: 'f2d35bf334e29ba06a14f9809cdefc9a7e9a4ae3fbd10c4f75ccada266aaccfe',
      },
    },
  )
    .then((response) => dispatch(addDataCurrencyAction(getCurrencyList(response.data, currencyList))));
};

export const receiveTransfer = (amount, currencyOf, currencyReceive) => (dispatch) => {
  axios.get(
    `https://min-api.cryptocompare.com/data/price?fsym=${currencyOf}&tsyms=${currencyReceive}`,
    {
      headers: {
        authorization: 'f2d35bf334e29ba06a14f9809cdefc9a7e9a4ae3fbd10c4f75ccada266aaccfe',
      },
    },
  )
    .then((response) => dispatch(
      addDataTransferAction(response.data[currencyReceive], amount, currencyOf, currencyReceive),
    ));
};

export const addHistory = (userId, dispatch) => {
  axios.get(`http://${process.env.REACT_APP_HOST}/api/history/${userId}`)
    .then((response) => dispatch(addDataHistoryAction(response.data)));
};

