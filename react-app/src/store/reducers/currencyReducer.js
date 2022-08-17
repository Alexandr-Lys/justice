import { currencyList } from '../../api/currency';

const ADD_DATA_CURRENCY = 'ADD_DATA_CURRENCY';

const defaultState = currencyList;

// eslint-disable-next-line default-param-last
export const currencyReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA_CURRENCY:
      return action.payload;
    default:
      return state;
  }
};

export const addDataCurrencyAction = (apiData) => ({ type: ADD_DATA_CURRENCY, payload: apiData });
