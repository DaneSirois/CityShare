// Import Dependencies:
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import Media from 'react-media'

// Import Partials / Modules:
import Navbar__partial from '../partials/Partial__navbar.js';
import Chatroom__module from '../modules/Chatroom/Chatroom__index.js';
import Feed__module from '../modules/Feed/Feed__index.js';

import * as actions from '../modules/Shared/actions/index.js';

import style from './View__Channel__style.css';

// The View:
class Channel__View extends Component {
  componentWillMount() {
    this.props.handleLoad(this.props.params.id);
  }
  componentWillUnmount() {
    this.props.clearChannelState();
  }
  render() {
    return (
      <div className={style.container}>
        <Media query="(max-width: 899px)">
          {matches => matches ? (
            <div>
              <Navbar__partial />
              <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div className={style.Chatroom__module}>
                  <Chatroom__module channel_id={this.props.params.id}/>
                </div>
                <div className={style.Feed__container}>
                  <Feed__module channel_id={this.props.params.id}/>
                </div>
              </ReactSwipe>
            </div>
          ) : (
            <div>
              <Navbar__partial />
              <div className={style.Chatroom__module}>
                <Chatroom__module channel_id={this.props.params.id}/>
              </div>
              <div className={style.Feed__module}>
                <Feed__module channel_id={this.props.params.id}/>
              </div>
            </div>
          )}
        </Media>
      </div>
    );
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleLoad: (channel_id) => {
      dispatch(actions.fetchChannelState(channel_id));
    },
    clearChannelState: () => {
      dispatch(actions.clearChannelState());
    }
  }
};

export default connect(null, mapDispatchToProps)(Channel__View);