import {type__CHANGE_AUTH_TAB} from '../Auth__types.js';

const CHANGE_AUTH_TAB = (tab) => {
  return {
    type: type__CHANGE_AUTH_TAB,
    payload: tab
  };
};

export default CHANGE_AUTH_TAB;