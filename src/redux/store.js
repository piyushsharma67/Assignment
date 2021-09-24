import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Reducer } from './reducer';

const rootReducer = combineReducers({
  Reducer:Reducer
});

export const store=createStore(rootReducer,applyMiddleware(thunk))


 