import {ADD_LOCATION} from '../../Shared/Shared__types.js';

const Location__reducer = (state = [], action) => {

  switch(action.type) {
    case ADD_LOCATION:
      return [action.payload, ...state];
    default:
      return state;
  };
};

export default Location__reducer;