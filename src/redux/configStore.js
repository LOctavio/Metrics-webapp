import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './homepage/homepage';
import detailsReducer from './details/details';

const reducer = combineReducers({
  homeReducer,
  detailsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
