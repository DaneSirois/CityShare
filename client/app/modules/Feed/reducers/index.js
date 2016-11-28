import {combineReducers} from 'redux';

import Updates__reducer from './Feed__reducer__Updates.js'
import Headlines__reducer from './Feed__reducer__Headlines.js'
import AdminId__reducer from './Feed__reducer__AdminId.js'

const Feed__reducers = combineReducers({
  updates: Updates__reducer,
  headlines: Headlines__reducer,
  adminId: AdminId__reducer
});

export default Feed__reducers;