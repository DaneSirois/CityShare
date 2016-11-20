import {combineReducers} from 'redux';

import showCP__reducer from './Auth__reducer__showCP.js'

const Auth__reducers = combineReducers({
  showCP: showCP__reducer
});

export default Auth__reducers;