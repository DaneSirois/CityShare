import {CLEAR_CHANNEL_STATE} from '../Shared__types.js';

const clearChannelState = (message) => {
  return {
    type: CLEAR_CHANNEL_STATE,
    payload: ''
  };
};

export default clearChannelState;