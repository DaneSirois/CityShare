import {ADD_TOPIC} from '../Shared__types.js';

const addTopic = (topic) => {
  console.log(topic);
  return {
    type: `socket/${ADD_TOPIC}`,
    payload: topic
  }
}

export default addTopic;