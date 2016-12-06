import {type__SHOW_CP} from '../Auth__types.js';

const SHOW_CP = (bool) => {
  return {
    type: type__SHOW_CP,
    payload: bool
  }
}

export default SHOW_CP;