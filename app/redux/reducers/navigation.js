/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { MainScreen, DetailScreen } from '../../screens/index'

// create stack navigator
export const Navigator = StackNavigator({
  Main: { screen: MainScreen },
  Detail: { screen: DetailScreen }
});

// bind actions and the state
const Navigation = ({ dispatch, nav }) => (
  <Navigator navigation={ addNavigationHelpers({ dispatch, state: nav }) } />
);

// map state to props
const mapStateToProps = (state) => ({
  nav: state.nav
});

export default connect(mapStateToProps)(Navigation)