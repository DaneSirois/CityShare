import {TOGGLE_CHANNEL_FORM} from '../Shared__types.js';

const TOGGLE_CHANNEL_FORM__action = (status) => {
  return {
    type: TOGGLE_CHANNEL_FORM,
    payload: status
  }
};

export default TOGGLE_CHANNEL_FORM__action;