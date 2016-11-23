import {GET_CHANNELS} from '../Shared__types.js';

const getChannels = (channels) => {
  return {
    type: `socket/${GET_CHANNELS}`,
    payload: channels
  }
}

export default getChannels;