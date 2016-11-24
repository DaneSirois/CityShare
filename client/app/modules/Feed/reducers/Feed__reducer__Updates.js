import {ADD_UPDATE} from '../../Shared/Shared__types.js';
import {ADD_UPDATES} from '../../Shared/Shared__types.js';

const Updates__reducer = (state = [], action) => {

  switch(action.type) {
    case ADD_UPDATE:
      console.log(state);
      return [action.payload, ...state];
    case ADD_UPDATES:
      return action.payload;
    default:
      return state;
  };
};

export default Updates__reducer;