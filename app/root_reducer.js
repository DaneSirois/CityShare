import {combineReducers} from 'redux';

import {Chatroom__reducers} from './modules/Chatroom/Chatroom__API.js';

const root_reducer = combineReducers({ 
  Chatroom: Chatroom__reducers
});

export default root_reducer;