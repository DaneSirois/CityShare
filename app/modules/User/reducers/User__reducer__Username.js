import {ADD_TO_CHATLOG} from '../../Shared/Shared__types.js';

const chatLog__reducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TO_CHATLOG:
      return state.concat([action.payload]);
    default:
      return state;
  };
};

export default chatLog__reducer;