import {ADD_TOPIC} from '../../Shared/Shared__types.js';
import {ADD_TOPICS} from '../../Shared/Shared__types.js';

const Topics__reducer = (state = [], action) => {

  switch(action.type) {
    case ADD_TOPIC:
      return [...state, action.payload];
    break;
    case ADD_TOPICS:
      return action.payload.reverse();
    break;
    default:
      return state;
  };
};

export default Topics__reducer;