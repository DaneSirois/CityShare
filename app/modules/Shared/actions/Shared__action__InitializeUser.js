import {INITIALIZE_USER} from '../Shared__types.js';

const InitializeUser = (JWT) => {
  return {
    type: `socket/${INITIALIZE_USER}`,
    payload: JWT
  };
};

export default InitializeUser;