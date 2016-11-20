import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

class ChatBar__container extends Component {
  constructor(props) {
    super(props)
    this.state = {message: ''}
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({message: event.target.value});
  }
  render() {
    return (
      <footer>
      <h1> ChatRoom </h1>
        <form onSubmit={this.props.handleSubmit(this.state.message)} >
          <input onChange={this.handleInputChange} type="text" />
        </form>
      </footer>
    )
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (messageText) => (event) => {
      event.preventDefault();
      
      dispatch(actions.newMessage(messageText));
    }
  }
};

export default connect(null, mapDispatchToProps)(ChatBar__container);
