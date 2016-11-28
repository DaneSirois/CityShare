import {GET_USER_COUNT} from '../../Shared/Shared__types.js';

const UserCount__reducer = (state = [], action) => {
  switch(action.type) {
    case GET_USER_COUNT:
      return action.payload;
    default:
      return state;
  };
};

export default UserCount__reducer;