import React, {Component} from 'react';
import Nav from './containers/Nav.js';
import MessageList from './containers/MessageList.js';
import ChatBar from './containers/ChatBar.js';
import Message from './components/Message.js';
import FeedBar from './containers/FeedBar.js';
export default class App extends Component {
  render() {
    return(
      <div className="wrapper">
        <Nav />
        <MessageList />
        <ChatBar />
        <FeedBar />
      </div>
    )
  }
}