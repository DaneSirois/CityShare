import React, {Component} from 'react';

class Channel__component extends Component {
  render() {
    return (
      <div>
        <span>{this.props.channelData.name}</span>
      </div>
    );
  };
};


export default Channel__component;
