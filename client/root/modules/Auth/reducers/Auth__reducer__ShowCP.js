import {type__SHOW_CP} from '../Auth__types.js';

const showCP__reducer = (state = false, action) => {
  switch(action.type) {
    case type__SHOW_CP:
      console.log("INSIDE OF REDUXER", action.payload);
      return action.payload;
    default:
      return state;
  };
};

export default showCP__reducer;