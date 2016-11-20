import {combineReducers} from 'redux';

import FeedList__reducer from './Feed__reducer__FeedList.js'

const Feed__reducers = combineReducers({
  feedList: FeedList__reducer
});

export default Feed__reducers;