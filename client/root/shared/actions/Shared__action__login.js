import {LOGIN_USER} from '../Shared__types.js';

const login = (loginCreds) => {
  return {
    type: `socket/${LOGIN_USER}`,
    payload: loginCreds
  };
};

export default login;