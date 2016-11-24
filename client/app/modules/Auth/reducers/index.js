import {combineReducers} from 'redux';

import showCP__reducer from './Auth__reducer__showCP.js';
import activeForm__reducer from './Auth__reducer__activeForm.js';

const Auth__reducers = combineReducers({
  showCP: showCP__reducer,
  activeForm: activeForm__reducer
});

export default Auth__reducers;