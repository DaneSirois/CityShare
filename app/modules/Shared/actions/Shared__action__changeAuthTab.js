import {SET_ACTIVE_AUTH_TAB} from '../Shared__types.js';

const changeAuthTab = (tab) => {
  return {
    type: SET_ACTIVE_AUTH_TAB,
    payload: tab
  }
}

export default changeAuthTab;