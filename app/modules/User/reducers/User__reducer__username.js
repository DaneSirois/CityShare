import {SET_USERNAME} from '../../Shared/Shared__types.js';

const username__reducer = (state = "Anonymous", action) => {
  switch(action.type) {
    case SET_USERNAME:
      return action.payload;
    default:
      return state;
  };
};

export default username__reducer;