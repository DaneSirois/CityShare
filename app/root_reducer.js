import {combineReducers} from 'redux';

import Chatroom__reducers from './modules/Chatroom/reducers/index.js';
import Portal__reducers from './modules/Portal/reducers/index.js';
import Feed__reducers from './modules/Feed/reducers/index.js';

const root_reducer = combineReducers({
  Portal: Portal__reducers,
  Chatroom: Chatroom__reducers,
  Feed: Feed__reducers
});

export default root_reducer;