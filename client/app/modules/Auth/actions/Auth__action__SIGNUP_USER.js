import {type__SIGNUP_USER} from '../Auth__types.js';

const SIGNUP_USER = (userCreds) => {
  return {
    type: `socket/${type__SIGNUP_USER}`,
    payload: userCreds
  };
};

export default SIGNUP_USER;