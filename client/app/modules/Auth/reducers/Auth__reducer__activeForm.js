import {type__CHANGE_AUTH_TAB} from '../Auth__types.js';

const activeForm__reducer = (state = "loginForm", action) => {
  switch(action.type) {
    case type__CHANGE_AUTH_TAB:
      return action.payload;
    default:
      return state;
  };
};

export default activeForm__reducer;