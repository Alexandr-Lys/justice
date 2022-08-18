import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { currencyReducer } from './reducers/currencyReducer';
import { convertReducer } from './reducers/convertReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  convert: convertReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
