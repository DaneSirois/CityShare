import {FORM_IS_ACTIVE} from '../../Shared/Shared__types.js';

const showCP__reducer = (state = false, action) => {
  switch(action.type) {
    case FORM_IS_ACTIVE:
      return action.payload;
    default:
      return state;
  };
};

export default showCP__reducer;