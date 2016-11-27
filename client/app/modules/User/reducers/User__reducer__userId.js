import {SET_USER_ID} from '../../Shared/Shared__types.js';

const userId__reducer = (state = null, action) => {
  switch(action.type) {
    case SET_USER_ID:
    console.log(action.payload);
      return action.payload;
    default:
      return state;
  };
};

export default userId__reducer;