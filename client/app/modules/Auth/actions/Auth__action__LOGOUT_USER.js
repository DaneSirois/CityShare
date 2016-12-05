import {LOGOUT_USER__type} from '../Auth__types.js';

const LOGOUT_USER = () => {
  return {
    type: `socket/${LOGOUT_USER__type}`,
    payload: true
  };
};

export default LOGOUT_USER;