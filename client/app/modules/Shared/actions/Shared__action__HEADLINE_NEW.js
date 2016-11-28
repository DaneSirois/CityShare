import {HEADLINE_NEW__type} from '../Shared__types.js';

const HEADLINE_NEW = (headline) => {
  return {
    type: `socket/${HEADLINE_NEW__type}`,
    payload: headline
  }
}

export default HEADLINE_NEW;