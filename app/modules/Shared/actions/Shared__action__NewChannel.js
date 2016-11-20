import {NEW_CHANNEL} from '../Shared__types.js';

const newChannel = (channelData) => {
  return {
    type: `socket/${NEW_CHANNEL}`,
    payload: channelData
  }
}

export default newChannel;