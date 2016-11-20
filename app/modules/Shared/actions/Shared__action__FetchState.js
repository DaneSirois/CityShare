import {GET_INITAL_STATE} from '../Shared__types.js';

const fetchState = () => {
  return {
    type: `socket/${GET_INITAL_STATE}`,
    payload: "GIVE_ME_STATE"
  };
};

export default fetchState;