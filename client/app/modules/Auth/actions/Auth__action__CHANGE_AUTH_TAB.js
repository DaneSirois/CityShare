import {CHANGE_AUTH_TAB__type} from '../Auth__types.js';

const CHANGE_AUTH_TAB = (tab) => {
  return {
    type: CHANGE_AUTH_TAB__type,
    payload: tab
  }
}

export default CHANGE_AUTH_TAB;