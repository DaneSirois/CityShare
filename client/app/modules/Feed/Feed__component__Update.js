import React, {Component} from 'react';

class Update__component extends Component {
  render() {
    return (
      <li>
        <span>{this.props.created_at}</span>
        <span>{this.props.content}</span>
      </li>
    );
  };
};


export default Update__component;
