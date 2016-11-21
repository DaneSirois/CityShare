import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

class FeedBar__container extends Component {
  constructor(props) {
    super(props)
    this.state = {update: ''}
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({update: event.target.value});
  }
  render() {
    return (
      <footer>
        <h1> Feed </h1>
        <textarea onChange={this.handleInputChange} type="text">
        </textarea>
        <button onClick={this.props.handleSubmit(this.state.update)}>Update</button>
      </footer>
    )
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (updateText) => (event) => {
      event.preventDefault();
      dispatch(actions.newUpdate(updateText));
    }
  }
};

export default connect(null, mapDispatchToProps)(FeedBar__container);
