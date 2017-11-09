/**
 * Created by nh019849 on 11/2/17.
 */

'use strict';
import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fiberActions from '../redux/actions/fiber'
import Styles from './styles/styles'
import FiberItem from './FiberItem'

class FiberList extends Component {
  componentWillMount() {
    this.props.actions.fetchFibers()
  }

  render() {
    var views = [];
    var i = 0;

    if (this.props.fibers.length % 2 == 0) {
      for (i=0; i<this.props.fibers.length; i=i+2) {
        views.push(
          <View key={this.props.fibers[i].id} style={Styles.row}>
            <FiberItem key={this.props.fibers[i].id}
                       fiber={this.props.fibers[i]}
                       left={true}
                       actions={this.props.actions}
                       nav={this.props.nav}/>
            <FiberItem key={this.props.fibers[i+1].id}
                       fiber={this.props.fibers[i+1]}
                       left={false}
                       actions={this.props.actions}
                       nav={this.props.nav}/>
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
                       left={true}
                       actions={this.props.actions}
                       nav={this.props.nav}/>
            <FiberItem key={this.props.fibers[i + 1].id}
                       fiber={this.props.fibers[i + 1]}
                       left={false}
                       actions={this.props.actions}
                       nav={this.props.nav}/>
          </View>
        )
      }
      views.push(
        <View key={this.props.fibers[i].id} style={Styles.row}>
          <FiberItem key={this.props.fibers[i].id}
                     fiber={this.props.fibers[i]}
                     left={true}
                     actions={this.props.actions}
                     nav={this.props.nav}/>
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