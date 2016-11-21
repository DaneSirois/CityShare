import {ADD_UPDATE} from '../../Shared/Shared__types.js';

const Updates__reducer = (state = [], action) => {

  switch(action.type) {
    case ADD_UPDATE:
      return [action.payload, ...state];
    default:
      return state;
  };
};

export default Updates__reducer;