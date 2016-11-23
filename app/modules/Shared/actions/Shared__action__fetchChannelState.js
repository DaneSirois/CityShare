import {FETCH_CHANNEL_STATE} from '../Shared__types.js';

const fetchChannelState = (update) => {
  return {
    type: `socket/${FETCH_CHANNEL_STATE}`,
    payload: update
  }
}

export default fetchChannelState;