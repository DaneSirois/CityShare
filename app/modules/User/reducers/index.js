import {combineReducers} from 'redux';

import loggedIn__reducer from './User__reducer__loggedIn.js';

const User__reducers = combineReducers({
  loggedIn: loggedIn__reducer
});

export default User__reducers;