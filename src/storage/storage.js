/**
  here we are keeping launch info, fetched from server
*/
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './dataReducer';

export let Storage = createStore(reducer, applyMiddleware(thunk));
