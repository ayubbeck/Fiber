/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navigation from './redux/reducers/navigation'

class Fiber extends Component {
  render() {
    return(
      // Pass on the store to provider and navigation.
      <Provider store={ store }>
        <Navigation />
      </Provider>
    )
  }
}

export default Fiber