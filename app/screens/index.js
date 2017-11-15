/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FiberApp from '../components/FiberApp'
import FiberDetail from '../components/FiberDetail'
import Styles from '../components/styles/styles'

export class MainScreen extends Component {
  static navigationOptions = () => {
    return {
      headerTitle: 'Foods Rich in Fiber',
      headerStyle: {
        backgroundColor: '#FF9933'
      }
    }
  };
  render() {
    return (
      <View style={ Styles.container }>
        <FiberApp navigation={ this.props.navigation }/>
      </View>
    );
  }
}

export class DetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.state.params.fiber.name,
      headerStyle: {
        backgroundColor: '#FF9933'
      }
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    return (
      <FiberDetail navigation={ this.props.navigation } fiber={ params.fiber } />
    );
  }
}