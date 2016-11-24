import {SET_ACTIVE_AUTH_TAB} from '../../Shared/Shared__types.js';

const activeForm__reducer = (state = "loginForm", action) => {
  switch(action.type) {
    case SET_ACTIVE_AUTH_TAB:
      return action.payload;
    default:
      return state;
  };
};

export default activeForm__reducer;