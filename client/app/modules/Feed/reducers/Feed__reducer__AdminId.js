import {IS_ADMIN} from '../../Shared/Shared__types.js';

const AdminId__reducer = (state = null, action) => {
  switch(action.type) {
    case IS_ADMIN:
      return action.payload;
    default:
      return state;
  };
};

export default AdminId__reducer;