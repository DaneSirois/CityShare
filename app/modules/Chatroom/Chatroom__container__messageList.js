import React, {Component} from 'react';
import {connect} from 'react-redux';

import Message__component from './Chatroom__component__message.js';

class MessageList__container extends Component {
  constructor (props) {
    super(props);
    this.renderMessages = this.renderMessages.bind(this);
  }
  renderMessages(chatLog) {
    return chatLog.map((message, index) => {
    console.log(message);
      if (message && Number(message.channel_id) === Number(this.props.channel_id)) {
        return (
          <Message__component key={index} content={message.message_text} username={message.username || "Anonymous"} time={message.created_at || "Before Time"} />
        )
      }
    });
  }

  render() {
    return (
      <ul>
        {this.renderMessages.bind(this)(this.props.chatLog)}
      </ul>
    );
  };
};

function mapStateToProps(state) {
  return ({
    chatLog: state.Chatroom.chatLog
  });
};

export default connect(mapStateToProps)(MessageList__container);
