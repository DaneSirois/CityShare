import {SIGNUP_USER__type} from '../Auth__types.js';

const SIGNUP_USER = (userCreds) => {
  return {
    type: `socket/${SIGNUP_USER__type}`,
    payload: userCreds
  };
};

export default SIGNUP_USER;