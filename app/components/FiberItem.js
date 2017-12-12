/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import config from '../configs/fiber'
import Styles from './styles/styles'

class FiberItem extends Component {
  handleOnPress() {
    this.props.navigation.navigate(
      'Detail',
      {
        fiberName: this.props.fiber.name,
        fiberIndex: this.props.fiberIndex,
        actions: this.props.actions,
        navigation: this.props.navigation
      }
    )
  }

  render() {
    // create pic url
    let pic = { uri: config.fibers_base_api + this.props.fiber.image };
    // show picture image and make it press-able
    return (
      <TouchableOpacity onPress={this.handleOnPress.bind(this)}>
        <View style={this.props.left ? Styles.itemLeftViewStyle: Styles.itemRightViewStyle}>
          <Image source={pic} resizeMode="contain" style={Styles.imageStyle}/>
        </View>
      </TouchableOpacity>
    )
  }
}

export default FiberItem