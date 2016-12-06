import {type__RENDER_APP} from '../App__types.js';

const RenderApp__reducer = (state = false, action) => {
  switch(action.type) {
    case 'type__RENDER_APP':
      return action.payload;
    default:
      return state;
  };
};

export default RenderApp__reducer;