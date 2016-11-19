import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class FeedBar extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<footer>
				<div className="updateArea">
	        <textarea className="form-control" rows="3" id="content"> </textarea>
	        <button className="btn btn-primary btn-lg btn-block">Submit</button>
	      </div>
			</footer>
		);
	}
}

export default connect(null, null)(FeedBar);