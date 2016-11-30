import {combineReducers} from 'redux';

import filterChannels__reducer from './Tags__reducer__filterChannels.js'


const Tags__reducers = combineReducers({
  filterChannels: filterChannels__reducer
});

export default Tags__reducers;