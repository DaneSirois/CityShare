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

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.update, this.props.topics[0].id);
    this.setState({ update: '' })
  }

  render() {
    console.log(this.props.userId, this.props.adminId);
    if (this.props.topics.length && Number(this.props.userId) === Number(this.props.adminId)) {
      return (
        <footer>
          <h1> Feed </h1>
          <textarea onChange={this.handleInputChange} value={this.state.update} type="text">
          </textarea>
          <button onClick={this.handleSubmit.bind(this)}>Update</button>
        </footer>
      )
    } else if (this.props.topics.length) {
      return (
        <footer>
          <h1> Feed </h1>
          <textarea onChange={this.handleInputChange} value={this.state.update} type="text" disabled>
          </textarea>
          <button onClick={this.handleSubmit.bind(this)} disabled>Update</button>
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
    topics: state.Feed.topics,
    userId: state.User.userId,
    adminId: state.Portal.adminId
  });
};


const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (updateText, topic_id) => {
      let update = {
        content: updateText,
        topic_id: topic_id
      }
      dispatch(actions.newUpdate(update));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedBar__container);
