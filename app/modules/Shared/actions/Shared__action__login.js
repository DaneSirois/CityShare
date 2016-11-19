import {AUTHENTICATE_USER} from '../Shared__types.js';

const login = (loginCreds) => {
  return {
    type: `socket/${AUTHENTICATE_USER}`,
    payload: loginCreds
  };
};

export default login;