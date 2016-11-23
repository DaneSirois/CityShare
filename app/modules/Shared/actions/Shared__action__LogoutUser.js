import {LOGOUT_USER} from '../Shared__types.js';

const LogoutUser = () => {
  return {
    type: `socket/${LOGOUT_USER}`,
    payload: true
  };
};

export default LogoutUser;