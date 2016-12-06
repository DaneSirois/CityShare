import {SET_USERNAME} from '../Shared__types.js';

const SetUsername = (bool) => {
  return {
    type: SET_USERNAME,
    payload: bool
  }
}

export default SetUsername;