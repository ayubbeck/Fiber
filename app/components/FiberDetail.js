/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import config from '../configs/fiber'
import Styles from './styles/styles'

class FiberDetail extends Component {
  render() {
    let pic = { uri: config.fibers_base_api + this.props.fiber.image };
    return (
      <View style={ Styles.container }>
        <View>
          <Image source={ pic } resizeMode="contain" style={ Styles.imageStyle }/>
        </View>

        <View style={ Styles.detailBody }>

          <View style={ Styles.detailMargin }>
            <View style={ Styles.detailMargin }>
              <Text style={ Styles.detailHeader }>Description</Text>
            </View>
            <View>
              <Text>{ this.props.fiber.desc }</Text>
            </View>
          </View>

          <View style={ Styles.detailMargin }>
            <View style={ Styles.detailMargin }>
              <Text style={ Styles.detailHeader }>Nutrition Facts</Text>
            </View>
            <View>
              <Text>Total Carbohydrate: { this.props.fiber.nutritionFacts.carbs.amount }</Text>
              <Text>Fiber: { this.props.fiber.nutritionFacts.fiber.amount }</Text>
              <Text>Sugar: { this.props.fiber.nutritionFacts.sugar.amount }</Text>
            </View>
          </View>

        </View>
      </View>
    )
  }
}

export default FiberDetail