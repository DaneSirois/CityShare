// Import Dependencies:
import React, {Component} from 'react';

import styles from './Chatroom__styles.css';

import MessageList__container from './Chatroom__container__messageList.js';
import ChatBar__container from './Chatroom__container__ChatBar.js';

// Root Component:
class Chatroom__module extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Chat Room</h1>
        <MessageList__container channel_id={this.props.channel_id} />
        <ChatBar__container channel_id={this.props.channel_id} />
      </div>
    );
  };
};


export default Chatroom__module;
