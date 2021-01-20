import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import dummy from './dummy';

const reducer = combineReducers({
  dummy,
});

const store = configureStore({
  reducer,
});

export default store;
