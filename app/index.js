/**
 * Created by nh019849 on 11/2/17.
 */

'use strict';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navigation from './redux/reducers/navigation'

class Fiber extends Component {
  render() {
    return(
      <Provider store={ store }>
        <Navigation />
      </Provider>
    )
  }
}

export default Fiber