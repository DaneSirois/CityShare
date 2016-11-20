// Import Dependencies:
import React, {Component} from 'react';

import styles from './Chatroom__styles.css';

import MessageList__container from './Chatroom__container__messageList.js';
import ChatBar__container from './Chatroom__container__ChatBar.js';

// Root Component:
class Chatroom__module extends Component {
  render() {
    return (
      <div>
        <MessageList__container />
        <ChatBar__container />
      </div>
    );
  };
};

export default Chatroom__module;
