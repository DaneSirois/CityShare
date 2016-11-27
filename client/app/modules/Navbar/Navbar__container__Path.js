import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import style from './styles/index.css';

class Path__container extends Component {
  renderChannelName (channelName) {
    if (channelName) {
      return (
        <h2 className={style.channelName}> &nbsp;> {channelName}</h2>
      )
    }
  }
  render() {
    return (
      <div>
        <Link to={"/"}>
          <h1 className={style.location_text}>{this.props.location}</h1>
        </Link>
        {this.renderChannelName.bind(this)(this.props.channelName)}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    location: state.Loading.location,
    channelName: state.Channel.channelName
  });
};

export default connect(mapStateToProps, null)(Path__container);