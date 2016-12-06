import {type__LOGOUT_USER} from '../Auth__types.js';

const LOGOUT_USER = () => {
  return {
    type: `socket/${type__LOGOUT_USER}`,
    payload: true
  };
};

export default LOGOUT_USER;