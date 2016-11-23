import {INITIALIZE_APP} from '../Shared__types.js';

const InitializeApp = (user_JWT) => {
  return {
    type: `socket/${INITIALIZE_APP}`,
    payload: user_JWT
  };
};

export default InitializeApp;