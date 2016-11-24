import {SHOW_CP} from '../../Shared/Shared__types.js';

const showCP__reducer = (state = false, action) => {
  switch(action.type) {
    case SHOW_CP:
      return action.payload;
    default:
      return state;
  };
};

export default showCP__reducer;