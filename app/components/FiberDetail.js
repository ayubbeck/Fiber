/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, Image, TouchableOpacity, TextInput, Button, Dimensions } from 'react-native'
import config from '../configs/fiber'
import Styles from './styles/styles'

class FiberDetail extends Component {
  constructor(props) {
    super(props)
    let text = this.props.fiber.desc;
    this.state = { text: text }
  }
  // make this item editable
  handleOnPress() {
    this.props.actions.makeItEditable(this.props.fiber.id);
  }
  // save the update
  handleSave() {
    this.props.actions.updateFiberDesc(this.props.fiber.id, this.state.text);
  }

  render() {
    // picture url
    let pic = { uri: config.fibers_base_api + this.props.fiber.image };
    let width = Dimensions.get('window').width;
    return (
      // show the details in nice format
      <View style={ Styles.container }>
        <View>
          <Image source={ pic } resizeMode="contain" style={ Styles.imageStyle }/>
        </View>

        <View style={ Styles.detailBody }>
          <View style={ Styles.detailMargin }>
            <View style={ Styles.detailMargin }>
              <Text style={ Styles.detailHeader }>Description</Text>
            </View>
            {
              this.props.fiber.editable ?
                <View>
                  <TextInput multiline={ true }
                             numberOfLines={ 4 }
                             style={{ width: width * 0.908, fontSize: 14,  borderColor: 'blue', borderWidth: 1, padding: 5 }}
                             onChangeText={(text) => this.setState({ text })}
                             value={ this.state.text }/>
                  <Button onPress={ this.handleSave.bind(this) } title='Submit' color="blue"/>
                </View> :
                <TouchableOpacity onPress={this.handleOnPress.bind(this)}>
                  <Text>{ this.props.fiber.desc }</Text>
                </TouchableOpacity>
            }
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

// map state to prop
const mapStateToProps = (state, props) => {
  return { fiber: state.fibers[props.fiberIndex] }
};

export default connect(mapStateToProps)(FiberDetail);