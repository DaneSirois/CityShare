import React, {Component} from 'react';
import {connect} from 'react-redux';

import Message__component from './Chatroom__component__message.js';
import style from './styles/index.css';

class MessageList__container extends Component {
  renderMessages(chatLog) {
    return chatLog.map((message, index) => {
      return (
        <Message__component key={index} content={message.message_text} username={message.username || "Anonymous"} time={message.created_at || "Before Time"} />
      )
    });
  }
  render() {
    return (
      <ul className={style.topicMessages}>
        {this.renderMessages.bind(this)(this.props.messages)}
      </ul>
    );
  };
};

function mapStateToProps(state) {
  return ({
    chatLog: state.Chatroom.chatLog,
  });
};

export default connect(mapStateToProps)(MessageList__container);
