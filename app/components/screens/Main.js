/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { View } from 'react-native'
import Styles from '../styles/styles'
import FiberApp from '../FiberApp'

class Main extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'Foods Rich in Fiber',
      headerStyle: Styles.headerStyle,
      headerTintColor: '#000000'
    }
  };

  render() {
    return (
      <View style={ Styles.container }>
        <FiberApp navigation={ this.props.navigation }/>
      </View>
    )
  }
}

export default Main