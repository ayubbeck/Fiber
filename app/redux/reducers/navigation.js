/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import Detail from '../../components/screens/Detail'
import Main from '../../components/screens/Main'

// create stack navigator
export const Navigator = StackNavigator({
  Main: { screen: Main },
  Detail: { screen: Detail }
});
// bind actions and the state
class Navigation extends Component {
  render() {
    return (
      <Navigator navigation={ addNavigationHelpers({ dispatch: this.props.dispatch, state: this.props.navigation }) }/>
    );
  }
}
// map state to props
const mapStateToProps = (state) => ({
  navigation: state.navigation
});

export default connect(mapStateToProps)(Navigation)