import {USER_AUTHENTICATED, LOGOUT_USER} from '../../Shared/Shared__types.js';

const loggedIn__reducer = (state = false, action) => {
  switch(action.type) {
    case USER_AUTHENTICATED:
      console.log("loggedIn__reducer, setting state.User.loggedIn to:", action.payload.loggedIn);
      return action.payload.loggedIn;
    break;
    case LOGOUT_USER:
      console.log("Logging out user. Set state.User.loggedIn to", action.payload);
      return action.payload;
    default:
      return state;
  };
};

export default loggedIn__reducer;