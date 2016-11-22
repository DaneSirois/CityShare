import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chatroom__module from '../modules/Chatroom/Chatroom__index.js';
import Navbar__container from '../modules/Shared/Shared__container__Navbar.js';
import Feed__module from '../modules/Feed/Feed__index.js';

import * as actions from '../modules/Shared/actions/index.js';

class ChannelView extends Component {
	componentWillMount() {
		this.props.handleLoad(this.props.params.id);
	}
	render() {
		return (
			<div>
			 	Show post {this.props.params.id}
			 	<Chatroom__module channel_id={this.props.params.id}/>
			 	<Navbar__container/>
			 	<Feed__module channel_id={this.props.params.id}/>
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