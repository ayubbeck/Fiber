/**
 * Created by Nodirbek Hojimatov on 11/6/17.
 */

'use strict';
import types from '../types/fiber'

// fiber app related reducers
let fiberReducer = (fibers=[], action) => {
  var newFibers = [];

  switch(action.type) {
    case types.ADD_FIBERS:
      action.fibers.map((fiber) => {
        var newFiber = Object.assign({}, fiber, { desc: fiber.desc.join(), editable: false });
        newFibers.push(newFiber)
      });
      return newFibers;
    case types.MAKE_IT_EDITABLE:
      fibers.map((fiber) => {
        var newFiber = null;
        if (fiber.id == action.fiberId) {
          newFiber = Object.assign({}, fiber, { editable: !fiber.editable });
        }
        else {
          newFiber = Object.assign({}, fiber);
        }
        newFibers.push(newFiber)
      });
      return newFibers;
    case types.UPDATE_FIBER_DESC:
      fibers.map((fiber) => {
        var newFiber = null;
        if (fiber.id == action.fiberId) {
          newFiber = Object.assign({}, fiber, { desc: action.fiberDesc, editable: !fiber.editable });
        }
        else {
          newFiber = Object.assign({}, fiber);
        }
        newFibers.push(newFiber)
      });
      return newFibers;
    default:
      return fibers
  }
};

export default fiberReducer