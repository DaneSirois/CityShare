import {NEW_MESSAGE} from '../Shared__types.js';

const newMessage = (message) => {
  return {
    type: `socket/${NEW_MESSAGE}`,
    payload: message
  };
};

export default newMessage;