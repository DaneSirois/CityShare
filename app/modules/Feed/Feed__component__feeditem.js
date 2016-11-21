import React, {Component} from 'react';

class FeedItem__component extends Component {
  render() {
    return (
      <li>
        <span>{this.props.updateData}</span>
      </li>
    );
  };
};


export default FeedItem__component;