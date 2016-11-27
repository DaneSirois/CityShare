import {combineReducers} from 'redux';

import Updates__reducer from './Feed__reducer__Updates.js'
import Topics__reducer from './Feed__reducer__Topics.js'
import AdminId__reducer from './Feed__reducer__AdminId.js'

const Feed__reducers = combineReducers({
  updates: Updates__reducer,
  topics: Topics__reducer,
  isAdmin: AdminId__reducer
});

export default Feed__reducers;