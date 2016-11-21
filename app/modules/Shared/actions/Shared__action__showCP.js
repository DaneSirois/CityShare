import {SHOW_CP} from '../Shared__types.js';

const show_CP = (CP_state) => {
  return {
    type: SHOW_CP,
    payload: CP_state
  }
}

export default show_CP;