import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import coinsReducer, { getCoinsFromAPI } from './Coins/coins';

const reducer = combineReducers({
  coinsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk)),
);

store.dispatch(getCoinsFromAPI());
export default store;
