// src/redux/store.js
import { createStore, combineReducers } from 'redux';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
});

const store = createStore(rootReducer);

export default store;
