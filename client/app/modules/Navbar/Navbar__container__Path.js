import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../Shared/actions/index.js';

import style from './styles/index.css';

class Path__container extends Component {
  componentWillUnmount() {
    this.props.clearChannel();
  }

  renderContent (channelName) {
    if (channelName) {
      return (
        <div className={style.cleardefaultstyles}>
          <Link to={"/"}>
            <h1 className={style.location_text}>{this.props.location}</h1>
          </Link>
          <h2 className={style.channelName}> &nbsp;> {channelName}</h2>
        </div>
      )
    } else {
      return (
        <Link to={"/"}>
          <h1 className={[style.channelName, style.location_text__alone].join(" ")}>{this.props.location}</h1>
        </Link>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderContent.bind(this)(this.props.channelName)}
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

function mapDispatchToProps(dispatch) {
  return {
    clearChannel: () => {
      dispatch(actions.CLEAR_CHANNEL());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Path__container);