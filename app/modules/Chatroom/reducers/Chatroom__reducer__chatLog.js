import {NEW_MESSAGE} from '../Chatroom__types.js';

const Chatroom__reducer__chatLog = (state = [], action) => {
  switch(action.type) {
    case NEW_MESSAGE:
      return state.concat([action.payload]);
    default:
      return state;
  };
};

export default Chatroom__reducer__chatLog;