import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Channel__component from './Portal__component__Channel.js';

class Index__container extends Component {
  constructor (props) {
    super(props);
    this.renderChannels = this.renderChannels.bind(this);
  }

  renderChannels(channelList) {
    return channelList.map((channel, index) => {
      return (
        <li key={channel.id}>
          <Link to={"channel/" + channel.id}>
          <Channel__component key={index} channelData={channel} />
          </Link>
        </li>
      )
    });
  }
  render() {
    return (
      <div>
        <h2>Portal</h2>
        {this.renderChannels(this.props.channelList)}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    channelList: state.Portal.channelList
  });
};

export default connect(mapStateToProps)(Index__container);
