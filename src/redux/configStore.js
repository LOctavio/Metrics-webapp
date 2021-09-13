import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import homepage from './homepage/homepage';
import details from './details/details';

const reducer = combineReducers({
  homepage,
  details,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
