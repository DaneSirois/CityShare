import {MESSAGE_ALERT} from '../../Shared/Shared__types.js';

const MessageAlert__reducer = (state = null, action) => {
  switch(action.type) {
    case MESSAGE_ALERT:
      return action.payload;
    default:
      return state;
  };
};

export default MessageAlert__reducer;