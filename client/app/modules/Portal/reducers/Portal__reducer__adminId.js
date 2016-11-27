import {GET_ADMIN_ID} from '../../Shared/Shared__types.js';

const adminId__reducer = (state = null, action) => {
  switch(action.type) {
    case GET_ADMIN_ID:
      return action.payload;
    default:
      return state;
  };
};

export default adminId__reducer;