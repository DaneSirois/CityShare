import {ADD_TOPIC} from '../../Shared/Shared__types.js';

const Topics__reducer = (state = [], action) => {

  switch(action.type) {
    case ADD_TOPIC:
      return [action.payload, ...state];
    break;
    default:
      return state;
  };
};

export default Topics__reducer;