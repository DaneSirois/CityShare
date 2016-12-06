import {type__INITIALIZE_APP} from '../App__types.js';

const INITIALIZE_APP = (user_JWT) => {
  return {
    type: `socket/${type__INITIALIZE_APP}`,
    payload: user_JWT
  };
};

export default INITIALIZE_APP;