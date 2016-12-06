import {combineReducers} from 'redux';

import NewChannelForm__reducer from './Channel__reducer__NewChannelForm.js';
import ChannelName__reducer from './Channel__reducer__ChannelName.js';

const Channel__reducers = combineReducers({
  current_formState: NewChannelForm__reducer,
  channelName: ChannelName__reducer
});

export default Channel__reducers;