import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import * as actions from '../Shared/actions/index.js';

import style from './styles/index.css';

class Location__container extends Component {
  componentWillUnmount() {
    this.props.clearChannel();
  }

  render() {
    return (
      <Link to={"/"}>
        <h1 className={style.location_text}>{this.props.location}</h1>
      </Link>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Location__container);