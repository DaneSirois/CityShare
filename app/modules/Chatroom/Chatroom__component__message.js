import React, {Component} from 'react';

class Message__component extends Component {
  render() {
    return (
      <li>
        <span> {this.props.username} ({this.props.time}):    {this.props.content}</span>
      </li>
    );
  };
};


export default Message__component;
