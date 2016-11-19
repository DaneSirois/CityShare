import { combineReducers } from 'redux';
import setUsernameReducer from './set_username_reducer.js';
import userCountReducer from './user_count_reducer.js';
import newMessageReducer from './new_message_reducer.js';
import newUpdateReducer from './new_update_reducer.js';

const rootReducer = combineReducers({
  userCount: userCountReducer,
  messages: newMessageReducer,
  username: setUsernameReducer,
  updates: newUpdateReducer
});

export default rootReducer;
