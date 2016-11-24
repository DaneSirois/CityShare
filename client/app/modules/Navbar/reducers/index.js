import {combineReducers} from 'redux';

import Location__reducer from './Navbar__reducer__location.js'


const Loading__reducers = combineReducers({
  location: Location__reducer
});

export default Loading__reducers;