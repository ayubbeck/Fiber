/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import Styles from '../styles/styles'
import FiberDetail from '../FiberDetail'

class Detail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.fiberName,
      headerStyle: Styles.headerStyle,
      headerTintColor: '#000000'
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <FiberDetail navigation={ params.navigation }
                   fiberIndex={ params.fiberIndex }
                   actions={ params.actions }/>
    )
  }
}

export default Detail