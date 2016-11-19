import {SIGNUP_USER} from '../Shared__types.js';

const login = (userCreds) => {
  return {
    type: `socket/${SIGNUP_USER}`,
    payload: userCreds
  };
};

export default login;