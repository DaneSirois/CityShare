import {FILTER_CHANNELS} from '../Shared__types.js';

const filterChannels = (tag) => {
  return {
    type: `socket/${FILTER_CHANNELS}`,
    payload: tag
  }
}

export default filterChannels;