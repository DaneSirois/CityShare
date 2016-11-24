import {ADD_TOPIC} from '../../Shared/Shared__types.js';
import {ADD_TOPICS} from '../../Shared/Shared__types.js';

const Topics__reducer = (state = [], action) => {

  switch(action.type) {
    case ADD_TOPIC:
      return [action.payload, ...state];
    break;
    case ADD_TOPICS:
      return action.payload;
    break;
    default:
      return state;
  };
};

export default Topics__reducer;