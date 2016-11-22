import {combineReducers} from 'redux';

import Locations__reducer from './Loading__reducer__location.js'


const Loading__reducers = combineReducers({
  location: Locations__reducer
});

export default Loading__reducers;