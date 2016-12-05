import {NEW_TOPIC} from '../Shared__types.js';

const newTopic = (topic) => {
  return {
    type: `socket/${NEW_TOPIC}`,
    payload: topic
  }
}

export default newTopic;