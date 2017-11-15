/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import { combineReducers } from 'redux'
import { Navigator } from './navigation'
import fibers from './fiber'

let nav = (state, action) => {
  let newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};

let reducers = combineReducers({
  fibers: fibers,
  nav: nav
});

export default reducers