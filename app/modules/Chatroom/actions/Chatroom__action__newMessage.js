import {NEW_MESSAGE} from '../Chatroom__types.js';

const Chatroom__action__newMessage = (username, message) => {
  return {
    type: `socket/${NEW_MESSAGE}`,
    payload: {username, message}
  };
}

export default Chatroom__action__newMessage;