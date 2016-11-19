import {combineReducers} from 'redux';

import username__reducer from './User__reducer__username.js'

const User__reducers = combineReducers({
  username: username__reducer
});

export default User__reducers;