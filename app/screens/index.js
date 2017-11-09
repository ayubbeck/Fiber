/**
 * Created by nh019849 on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import FiberApp from '../components/FiberApp'

export class MainScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Foods Rich in Fiber',
    headerStyle: {
      backgroundColor: '#FF9933'
    }
  };
  render() {
    return (
      <View style={{flex:1}}>
        <FiberApp navigation={ this.props.navigation }/>
      </View>
    );
  }
}

export class DetailScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Fun Facts',
    headerStyle: {
      backgroundColor: '#FF9933'
    }
  };
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>{params.fiber.name}</Text>
      </View>
    );
  }
}