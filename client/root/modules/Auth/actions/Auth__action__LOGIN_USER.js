import {type__LOGIN_USER} from '../Auth__types.js';

const LOGIN_USER = (loginCreds) => {
  return {
    type: `socket/${type__LOGIN_USER}`,
    payload: loginCreds
  };
};

export default LOGIN_USER;