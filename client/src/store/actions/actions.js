const ADD_USER_DATA = 'ADD_USER_DATA';
const ADD_DATA_HISTORY = 'ADD_DATA_HISTORY';
const ADD_DATA_WALLET = 'ADD_DATA_WALLET';
const ADD_DATA_CRYPTO_GRAPH = 'ADD_DATA_CRYPTO_GRAPH';

const LOADING = 'LOADING';
const ERROR = 'ERROR';
export const addUserDataAction = (userData) => (
  {
    type: ADD_USER_DATA,
    payload: {
      ...userData,
    },
  }
);

export const addDataHistoryAction = (data) => ({ type: ADD_DATA_HISTORY, payload: data });
export const addDataWalletAction = (data) => ({ type: ADD_DATA_WALLET, payload: data });
export const addDataCryptoGraphAction = (crypto, currency, interval, limit, data) => (
  {
    type: ADD_DATA_CRYPTO_GRAPH,
    payload: {
      crypto,
      currency,
      interval,
      limit,
      data,
    },
  }
);

export const loadingAction = (data) => ({ type: LOADING, payload: data });
export const errorAction = (data) => ({ type: ERROR, payload: data });
