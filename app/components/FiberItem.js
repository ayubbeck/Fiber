/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions } from 'react-navigation';
import config from '../configs/fiber'
import fiberActions from '../redux/actions/fiber'
import Styles from './styles/styles'

class FiberItem extends Component {
  render() {
    // create pic url
    let pic = {uri: config.fibers_base_api + this.props.fiber.image};
    return (
      // show picture image and make it press-able
      <TouchableOpacity onPress={() => this.props.nav.navigate('Detail', {fiber: this.props.fiber})}>
        <View style={this.props.left ? Styles.itemLeftViewStyle: Styles.itemRightViewStyle}>
          <Image source={pic} resizeMode="contain" style={Styles.imageStyle}/>
        </View>
      </TouchableOpacity>
    )
  }
}

export default FiberItem