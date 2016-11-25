import {ADD_MESSAGE} from '../../Shared/Shared__types.js';
import {ADD_MESSAGES} from '../../Shared/Shared__types.js';

const chatLog__reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_MESSAGE:
      return state.concat([action.payload]);
    break;
    case ADD_MESSAGES:
      return action.payload;
    break;
    default:
      return state;
  };
};

export default chatLog__reducer;