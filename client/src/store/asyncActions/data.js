import axios from 'axios';

import { addDataCurrencyAction } from '../reducers/currencyReducer';
import { currencyList, getCurrencyList } from '../../api/currency';
import { addDataTransferAction } from '../reducers/convertReducer';
import {
  addDataCryptoGraphAction,
  addDataHistoryAction, addDataWalletAction, errorAction, loadingAction,
} from '../actions/actions';

export const getApiDataCurrency = (dispatch) => {
  axios.get(
    // eslint-disable-next-line max-len
    'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,ADA,USDT,LTC,ETN,ETC,NEO,LINK,ENG,ARNX,XLM,RVN,NPXS,PIVX,NAS,PPC&tsyms=RUB&tsyms=USD',
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

export const addWallet = (userId) => async (dispatch) => {
  try {
    dispatch(loadingAction(true));
    const response = await axios.get(`http://${process.env.REACT_APP_HOST}/api/wallet/${userId}`);
    dispatch(addDataWalletAction(response.data));
  } catch (e) {
    dispatch(errorAction(e));
  } finally {
    dispatch(loadingAction(false));
  }
};

export const getCryptoGraph = (crypto, currency, interval, limit) => async (dispatch) => {
  console.log(crypto, currency, interval, limit);
  try {
    dispatch(loadingAction(true));
    const response = await axios
      .get(`https://www.binance.com/api/v3/uiKlines?limit=${limit}&symbol=${crypto}${currency}&interval=${interval}`);
    dispatch(addDataCryptoGraphAction(crypto, currency, interval, limit, [...response.data]));
  } catch (e) {
    dispatch(errorAction(e));
  } finally {
    dispatch(loadingAction(false));
  }
};
