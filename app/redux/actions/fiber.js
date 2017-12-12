/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import axios from 'axios'
import configs from '../../configs/fiber'
import types from '../types/fiber'

// app actions
let fiberActions = {
  // add the fibers to the state
  addFibers: function(fibers) {
    return {
      type: types.ADD_FIBERS,
      fibers: fibers
    }
  },
  // make if editable
  makeItEditable: function(fiberId) {
    return {
      type: types.MAKE_IT_EDITABLE,
      fiberId: fiberId
    }
  },
  updateFiberDesc: function(fiberId, fiberDesc) {
    return {
      type: types.UPDATE_FIBER_DESC,
      fiberId: fiberId,
      fiberDesc: fiberDesc
    }
  },
  // fetch fibers via AJAX call
  fetchFibers: function() {
    return (dispatch) => {
      axios.get(configs.fetch_fibers_url)
        .then(function (response) {
          dispatch(fiberActions.addFibers(response.data))
        }).catch((error) => {
          console.log(error);
          dispatch(fiberActions.addFibers([]))
        })
    }
  }
};

export default fiberActions