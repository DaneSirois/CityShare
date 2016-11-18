import React, {Component} from 'react';
import {connect} from 'react-redux';

// Import components:
// import {Chatroom__component__message as message} from './Chatroom__component__message.js'; 

class Chatroom__container__messageList extends Component {
  render() {
    return (
      <div>
        Hello world!
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    chatLog: state.Chatroom.chatLog
  });
};

export default connect(mapStateToProps)(Chatroom__container__messageList);
