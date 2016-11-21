import React, { Component } from 'react';

class ChannelView extends Component {
	render() {
		return <div> Show post {this.props.params.id}</div>
	}
}

export default ChannelView;