/**
 * Created by nh019849 on 10/27/17.
 */

'use strict';
import types from '../types/fiber'

let fiberReducer = (fibers=[], action) => {
  var newFibers = [];

  switch(action.type) {
    case types.ADD_FIBERS:
      action.fibers.map((fiber) => {
        var newFiber = Object.assign({}, fiber, {});
        newFibers.push(newFiber)
      });
      return newFibers;
    default:
      return fibers
  }
};

export default fiberReducer