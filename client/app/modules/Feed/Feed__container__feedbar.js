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
    if (this.props.topics.length) {
      return (
        <footer>
          <h1> Feed </h1>
          <textarea onChange={this.handleInputChange} type="text">
          </textarea>
          <button onClick={this.props.handleSubmit(this.state.update, this.props.topics[0].id)}>Update</button>
        </footer>
      )
    } else {
      return(
        <h1>No Topics</h1>
      )
    }
  }
};

function mapStateToProps(state) {
  return ({
    topics: state.Feed.topics
  });
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (updateText, topic_id) => (event) => {
      event.preventDefault();
      let update = {
        content: updateText,
        topic_id: topic_id
      }
      dispatch(actions.newUpdate(update));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedBar__container);
