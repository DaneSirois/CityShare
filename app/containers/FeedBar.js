import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { newUpdate } from '../actions/index.js';

class FeedBar extends Component {
	constructor(props) {
		super(props)
		this.state = { content: ""}

	}

	sendUpdate(event) {
		this.props.newUpdate(this.state.content)
		this.setState({ content: '' })
 	}

 	handleUpdateChange(event) {
 		this.setState({content: event.target.value});
 	}

	render() {
		return(
			<footer>
				<div className="updateArea">
	        <textarea className="form-control" onChange={this.handleUpdateChange.bind(this)} value={this.state.content} rows="3" id="content" placeholder> </textarea>
	        <button onClick={this.sendUpdate.bind(this)} className="btn btn-primary btn-lg btn-block">Submit</button>
	      </div>
			</footer>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators( { newUpdate }, dispatch)
}

export default connect(null, mapDispatchToProps)(FeedBar);