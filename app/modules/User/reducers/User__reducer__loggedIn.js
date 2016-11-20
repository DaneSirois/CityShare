import {USER_AUTHENTICATED} from '../../Shared/Shared__types.js';

const loggedIn__reducer = (state = false, action) => {
  switch(action.type) {
    case USER_AUTHENTICATED:
      return action.payload;
    default:
      return state;
  };
};

export default loggedIn__reducer;