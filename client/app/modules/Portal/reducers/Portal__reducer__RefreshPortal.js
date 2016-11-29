import {REFRESH_PORTAL} from '../../Shared/Shared__types.js';

const refreshPortal__reducer = (state = [], action) => {
  switch(action.type) {
    case REFRESH_PORTAL:
      return action.channels;
    default:
      return state;
  };
};

export default refreshPortal__reducer;