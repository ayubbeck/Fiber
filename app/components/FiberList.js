/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { View } from 'react-native'
import Styles from './styles/styles'
import FiberItem from './FiberItem'

class FiberList extends Component {
  render() {
    var views = [];
    var i = 0;
    // Nothing special here, just creating views in two columns
    if (this.props.fibers.length % 2 == 0) {
      for (i=0; i<this.props.fibers.length; i=i+2) {
        views.push(
          <View key={this.props.fibers[i].id} style={Styles.row}>
            <FiberItem key={this.props.fibers[i].id}
                       fiber={this.props.fibers[i]}
                       fiberIndex={i}
                       left={true}
                       actions={this.props.actions}
                       navigation={this.props.navigation}/>
            <FiberItem key={this.props.fibers[i+1].id}
                       fiber={this.props.fibers[i+1]}
                       fiberIndex={i+1}
                       left={false}
                       actions={this.props.actions}
                       navigation={this.props.navigation}/>
          </View>
        )
      }
    }
    else {
      for (i=0; i<this.props.fibers.length-1; i=i+2) {
        views.push(
          <View key={this.props.fibers[i].id} style={Styles.row}>
            <FiberItem key={this.props.fibers[i].id}
                       fiber={this.props.fibers[i]}
                       fiberIndex={i}
                       left={true}
                       actions={this.props.actions}
                       navigation={this.props.navigation}/>
            <FiberItem key={this.props.fibers[i + 1].id}
                       fiber={this.props.fibers[i + 1]}
                       fiberIndex={i+1}
                       left={false}
                       actions={this.props.actions}
                       navigation={this.props.navigation}/>
          </View>
        )
      }
      views.push(
        <View key={this.props.fibers[i].id} style={Styles.row}>
          <FiberItem key={this.props.fibers[i].id}
                     fiber={this.props.fibers[i]}
                     fiberIndex={i}
                     left={true}
                     actions={this.props.actions}
                     navigation={this.props.navigation}/>
        </View>
      )
    }

    return (
      <View style={Styles.listContainer}>
        { views }
      </View>
    )
  }
}

export default FiberList