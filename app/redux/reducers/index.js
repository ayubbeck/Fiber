/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import { Navigator } from './navigation'
import fibers from './fiber'

// navigator reducer
function navigation (state, action) {
  let newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
}
// combine navigator and app reducers
let reducers = combineReducers({
  fibers: fibers,
  navigation: navigation
});

export default reducers