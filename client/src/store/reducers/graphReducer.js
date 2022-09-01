import axios from 'axios';

const ADD_DATA_CRYPTO_GRAPH = 'ADD_DATA_CRYPTO_GRAPH';

const defaultState = {
  crypto: 'BTC',
  currency: 'USDT',
  interval: '1d',
  limit: '100',
};

// eslint-disable-next-line default-param-last
export const graphReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA_CRYPTO_GRAPH:
      return action.payload;
    default:
      return state;
  }
};

export const addDataCryptoGraphAction = async (crypto, currency, interval, limit) => {
  const getCryptoGraph = await axios.get(
    `https://www.binance.com/api/v3/uiKlines?limit=${limit}&symbol=${crypto}${currency}&interval=${interval}`,
  )
    .then((response) => response.data);
  return (
    {
      type: ADD_DATA_CRYPTO_GRAPH,
      payload: {
        crypto,
        currency,
        interval,
        limit,
        data: [...getCryptoGraph],
      },
    }
  );
};
