import {HEADLINES_ADD__type} from '../../Shared/Shared__types.js';
import {HEADLINE_NEW__type} from '../../Shared/Shared__types.js';

const Headlines__reducer = (state = [], action) => {
  switch(action.type) {
    case HEADLINE_NEW__type:
      console.log("inside of headlines reducer NEW", action.payload);
      return [action.payload, ...state];
    break;
    case HEADLINES_ADD__type:
      console.log("inside of headlines reducer ADD", action.payload);
      return action.payload;
    break;
    default:
      return state;
  };
};

export default Headlines__reducer;