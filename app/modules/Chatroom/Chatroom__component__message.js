import React, {Component} from 'react';

class Message__component extends Component {
  render() {
    return (
      <li>
        <span> {this.props.username} ({this.props.created_at}):    {this.props.content}</span>
      </li>
    );
  };
};


export default Message__component;
