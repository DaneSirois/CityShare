import {combineReducers} from 'redux';

import chatLog__reducer from './Chatroom__reducer__chatLog.js'

const Chatroom__reducers = combineReducers({
  chatLog: chatLog__reducer
});

export default Chatroom__reducers;