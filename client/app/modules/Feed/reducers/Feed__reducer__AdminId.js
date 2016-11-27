import {GET_ADMIN_ID} from '../../Shared/Shared__types.js';

const AdminId__reducer = (state = null, action) => {
  switch(action.type) {
    case GET_ADMIN_ID:
      return action.payload;
    default:
      return state;
  };
};

export default AdminId__reducer;