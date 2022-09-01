import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { currencyReducer } from './reducers/currencyReducer';
import { convertReducer } from './reducers/convertReducer';
import { graphReducer } from './reducers/graphReducer';
import { historyReducer } from './reducers/historyReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
  convert: convertReducer,
  graph: graphReducer,
  history: historyReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
