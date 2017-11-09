/**
 * Created by nh019849 on 10/27/17.
 */

'use strict';
import axios from 'axios'
import configs from '../../configs/fiber'
import types from '../types/fiber'

let fiberActions = {

  addFibers: function(fibers) {
    return {
      type: types.ADD_FIBERS,
      fibers: fibers
    }
  },

  fetchFibers: function() {
    return (dispatch) => {
      axios.get(configs.fetch_fibers_url)
        .then(function (response) {
          //console.log('DATA');
          //console.log(response.data);
          //console.log('DATA');
          dispatch(fiberActions.addFibers(response.data))
        }).catch((error) => {
          //console.log('ERROR');
          //console.log(error);
          //console.log('ERROR');
          dispatch(fiberActions.addFibers([]))
        })
    }
  }

};

export default fiberActions