import {SHOW_CP__type} from '../Auth__types.js';

const showCP__reducer = (state = false, action) => {
  switch(action.type) {
    case SHOW_CP__type:
      console.log("INSIDE OF REDUXER", action.payload);
      return action.payload;
    default:
      return state;
  };
};

export default showCP__reducer;