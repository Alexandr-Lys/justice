const ADD_DATA_WALLET = 'ADD_DATA_WALLET';
const LOADING = 'LOADING';
const ERROR = 'ERROR';
const defaultState = {
  loading: false,
  error: null,
  data: [],
};

// eslint-disable-next-line default-param-last
export const walletReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA_WALLET:
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
