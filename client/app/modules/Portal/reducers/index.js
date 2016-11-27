import {combineReducers} from 'redux';

import ChannelList__reducer from './Portal__reducer__ChannelList.js'
import GetChannels__reducer from './Portal__reducer__GetChannels.js'
import adminId__reducer from './Portal__reducer__adminId.js'

const Portal__reducers = combineReducers({
  channelList: ChannelList__reducer,
  getChannels: GetChannels__reducer,
  adminId: adminId__reducer
});

export default Portal__reducers;