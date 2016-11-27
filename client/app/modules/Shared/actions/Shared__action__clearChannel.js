import {SET_CHANNEL_NAME} from '../Shared__types.js';

const CLEAR_CHANNEL = () => {
  return {
    type: `${SET_CHANNEL_NAME}`,
    payload: ""
  }
}

export default CLEAR_CHANNEL;