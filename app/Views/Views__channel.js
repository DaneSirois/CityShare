import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chatroom__module from '../modules/Chatroom/Chatroom__index.js';
import Navbar__container from '../modules/Shared/Shared__container__Navbar.js';
import Feed__module from '../modules/Feed/Feed__index.js';
import { fetchFeed } from '../modules/Shared/actions/Shared__action__fetchfeed';
class ChannelView extends Component {

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

export default connect(null, { fetchFeed })(ChannelView);