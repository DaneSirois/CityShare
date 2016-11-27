import {ADD_LOCATION} from '../../Shared/Shared__types.js';

const Location__reducer = (state = null, action) => {

  switch(action.type) {
  	case ADD_LOCATION:
      return action.payload;
    default:
      return state;
  };
};

export default Location__reducer;