import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { currencyReducer } from './reducers/currencyReducer';
import { convertReducer } from './reducers/convertReducer';
import { graphReducer } from './reducers/graphReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  convert: convertReducer,
  graph: graphReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
