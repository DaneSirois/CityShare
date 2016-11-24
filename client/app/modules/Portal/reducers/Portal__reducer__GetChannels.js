import {GET_CHANNELS} from '../../Shared/Shared__types.js';

const GetChannels__reducer = (state = [], action) => {
  switch(action.type) {
    case GET_CHANNELS:
      return state.concat([action.payload]);
    default:
      return state;
  };
};

export default GetChannels__reducer;