import {combineReducers} from 'redux';

import NewChannelForm__reducer from './Channel__reducer__NewChannelForm.js';

const Channel__reducers = combineReducers({
  current_formState: NewChannelForm__reducer
});

export default Channel__reducers;