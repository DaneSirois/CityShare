import {ADD_TO_FEEDLIST} from '../../Shared/Shared__types.js';

const FeedList__reducer = (state = [], action) => {

  switch(action.type) {
    case ADD_TO_FEEDLIST:
      return state.concat([action.payload]);
    default:
      return state;
  };
};

export default FeedList__reducer;