const ADD_DATA_CRYPTO_GRAPH = 'ADD_DATA_CRYPTO_GRAPH';
const LOADING = 'LOADING';
const ERROR = 'ERROR';

const defaultState = {
  loading: false,
  error: null,
  data: {
    crypto: 'BTC',
    currency: 'USDT',
    interval: '1d',
    limit: '100',
  },
};

// eslint-disable-next-line default-param-last
export const graphReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA_CRYPTO_GRAPH:
      return {
        ...state,
        data: action.payload,
      };
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
