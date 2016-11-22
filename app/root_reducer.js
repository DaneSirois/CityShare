import {combineReducers} from 'redux';

import Auth__reducers from './modules/Auth/reducers/index.js';
import User__reducers from './modules/User/reducers/index.js';
import Chatroom__reducers from './modules/Chatroom/reducers/index.js';
import Portal__reducers from './modules/Portal/reducers/index.js';
import Feed__reducers from './modules/Feed/reducers/index.js';
import Loading__reducers from './modules/Loading/reducers/index.js';

const root_reducer = combineReducers({
  Auth: Auth__reducers,
  User: User__reducers,
  Portal: Portal__reducers,
  Chatroom: Chatroom__reducers,
  Feed: Feed__reducers,
  Loading: Loading__reducers
});

export default root_reducer;