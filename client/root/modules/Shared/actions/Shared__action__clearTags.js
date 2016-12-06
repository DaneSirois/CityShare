import {CLEAR_TAGS} from '../Shared__types.js';

const clearTags = () => {
  return {
    type: CLEAR_TAGS,
    payload: ""
  }
}

export default clearTags;