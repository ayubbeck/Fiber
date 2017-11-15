/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from './reducers/index'

let initialState = { fibers: [] };

let finalCreateStore = compose(
  applyMiddleware(thunk, createLogger())
)(createStore);

let configureStore = (initialState = initialState) => {
  return finalCreateStore(reducers, initialState)
};

export default configureStore(initialState)