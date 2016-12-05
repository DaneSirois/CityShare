import {SHOW_CP__type} from '../Auth__types.js';

const SHOW_CP = (bool) => {
  console.log("ISNDE OF ACTIOn");
  return {
    type: SHOW_CP__type,
    payload: bool
  }
}

export default SHOW_CP;