import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currencyReducer } from './reducers/currencyReducer';

const rootReducer = combineReducers({
  currency: currencyReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
