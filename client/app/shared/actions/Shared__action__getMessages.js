import {GET_MESSAGES} from '../Shared__types.js';

const getMessages = (message) => {
  return {
    type: `socket/${GET_MESSAGES}`,
    payload: message
  };
};

export default getMessages;