import {TOGGLE_CHANNEL_FORM} from '../../Shared/Shared__types.js';

const NewChannelForm__reducer = (state = "CLOSED", action) => {
  switch(action.type) {
    case TOGGLE_CHANNEL_FORM:
      return action.payload;
    break;
    default:
      return state;
    break;
  };
};

export default NewChannelForm__reducer;