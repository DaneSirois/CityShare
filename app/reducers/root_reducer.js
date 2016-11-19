import { combineReducers } from 'redux';
import setUsernameReducer from './set_username_reducer.js';
import userCountReducer from './user_count_reducer.js';
import newMessageReducer from './new_message_reducer.js';

const rootReducer = combineReducers({
  userCount: userCountReducer,
  messages: newMessageReducer,
  username: setUsernameReducer
});

export default rootReducer;
