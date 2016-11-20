import {SET_ACTIVE_FORM} from '../../Shared/Shared__types.js';

const activeForm__reducer = (state = "loginForm", action) => {
  switch(action.type) {
    case SET_ACTIVE_FORM:
      return action.payload;
    default:
      return state;
  };
};

export default activeForm__reducer;