import {LOGIN_USER__type} from '../Auth__types.js';

const LOGIN_USER = (loginCreds) => {
  return {
    type: `socket/${LOGIN_USER__type}`,
    payload: loginCreds
  };
};

export default LOGIN_USER;