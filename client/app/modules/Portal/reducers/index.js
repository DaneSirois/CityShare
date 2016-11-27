import {combineReducers} from 'redux';

import ChannelList__reducer from './Portal__reducer__ChannelList.js'
import GetChannels__reducer from './Portal__reducer__GetChannels.js'

const Portal__reducers = combineReducers({
  channelList: ChannelList__reducer,
  getChannels: GetChannels__reducer,
});

export default Portal__reducers;