import {combineReducers} from 'redux';

import ChannelList__reducer from './Portal__reducer__ChannelList.js'
import GetChannels__reducer from './Portal__reducer__GetChannels.js'
import UserCount__reducer from './Portal__reducer__UserCount.js'
import MessageAlert__reducer from './Portal__reducer__MessageAlert.js'


const Portal__reducers = combineReducers({
  channelList: ChannelList__reducer,
  getChannels: GetChannels__reducer,
  userCount: UserCount__reducer,
  messageAlert: MessageAlert__reducer
});

export default Portal__reducers;