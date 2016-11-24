import {RENDER_APP} from '../../Shared/Shared__types.js';

const RenderApp__reducer = (state = false, action) => {
  switch(action.type) {
    case 'RENDER_APP':
      return action.payload;
    default:
      return state;
  };
};

export default RenderApp__reducer;