import {type__RENDER_APP} from '../App__types.js';

const RENDER_APP = (bool) => {
  return {
    type: type__RENDER_APP,
    payload: bool
  }
}

export default RENDER_APP;