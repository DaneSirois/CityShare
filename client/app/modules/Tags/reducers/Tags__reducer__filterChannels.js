import {FILTER_CHANNELS} from '../../Shared/Shared__types.js';
import {CLEAR_TAGS} from '../../Shared/Shared__types.js';

const filterChannels__reducer = (state = [], action) => {

  switch(action.type) {
    case FILTER_CHANNELS:
      return action.payload;
    case CLEAR_TAGS:
      return [];
    default:
      return state;
  };
};

export default filterChannels__reducer;