import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chatroom__module from '../modules/Chatroom/Chatroom__index.js';
import Navbar__module from '../modules/Navbar/Navbar_index.js';
import Feed__module from '../modules/Feed/Feed__index.js';
import { Link } from 'react-router';
import * as actions from '../modules/Shared/actions/index.js';

import style from './styles/channel.css';

class ChannelView extends Component {
	componentWillMount() {
		this.props.handleLoad(this.props.params.id);
	}

	render() {
		return (

			<div className={style.container}>
        <div className={style.Navbar__container}>
          <Navbar__module/>
        </div>
        <div className={style.Chatroom__container}>
          <Chatroom__module channel_id={this.props.params.id}/>
        </div>
        <div className={style.Feed__container}>
          <Feed__module channel_id={this.props.params.id}/>
        </div>
			</div>
		);
	}
}


const mapDispatchToProps = function (dispatch) {
  return {
    handleLoad: (channel_id) => {
      dispatch(actions.fetchChannelState(channel_id));
    }
  }
};

export default connect(null, mapDispatchToProps)(ChannelView);