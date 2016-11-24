import {RENDER_APP} from '../Shared__types.js';

const RenderApp = (bool) => {
  console.log(bool);
  return {
    type: RENDER_APP,
    payload: bool
  }
}

export default RenderApp;