import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as action from '../Shared/actions/index.js';
import style from './styles/index.css';

class ChannelName__container extends Component {
  render() {
    return (
      <h2>{this.props.channelName}</h2>
    );
  };
};

const mapStateToProps = function (state) {
  return {
    channelName: state.Channel.channelName
  }
};

export default connect(mapStateToProps)(ChannelName__container);
