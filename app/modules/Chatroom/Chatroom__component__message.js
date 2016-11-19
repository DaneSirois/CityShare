import React, {Component} from 'react';

class Message__component extends Component {
  render() {
    console.log(this.props.messageData);
    return (
      <li>
        <span>{this.props.messageData}</span>
      </li>
    );
  };
};


export default Message__component;
