/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, ScrollView } from 'react-native'
import fiberActions from '../redux/actions/fiber'
import Styles from './styles/styles'
import FiberList from './FiberList'

class FiberApp extends Component {
  // this is where we trigger an API call to get fibers
  componentWillMount() {
    this.props.actions.fetchFibers()
  }
  render() {
    return (
      <View style={ Styles.container }>
        <View style={ Styles.statusBar }/>
        <ScrollView style={ Styles.whiteBackColor }>
          <FiberList fibers={ this.props.fibers }
                     actions={ this.props.actions }
                     navigation={ this.props.navigation }/>
        </ScrollView>
      </View>
    )
  }
}

// map state to prop
const mapStateToProps = (state) => {
  return { fibers: state.fibers }
};

// bind actions to state
const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators({ ...fiberActions }, dispatch) }
};

export default connect(mapStateToProps, mapDispatchToProps)(FiberApp)