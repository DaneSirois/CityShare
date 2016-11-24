import {combineReducers} from 'redux';

import loggedIn__reducer from './User__reducer__loggedIn.js';
import username__reducer from './User__reducer__username.js';

const User__reducers = combineReducers({
  loggedIn: loggedIn__reducer,
  username: username__reducer
});

export default User__reducers;