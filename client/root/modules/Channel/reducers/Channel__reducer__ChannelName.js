import {SET_CHANNEL_NAME} from '../../Shared/Shared__types.js';

const ChannelName__reducer = (state = "", action) => {
  switch(action.type) {
    case SET_CHANNEL_NAME:
      console.log(action.payload);
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default ChannelName__reducer;