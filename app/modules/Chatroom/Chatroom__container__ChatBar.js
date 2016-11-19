import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

class ChatBar__container extends Component {
  render() {
    return (
      <footer>
        <form onSubmit={this.props.handleSubmit("Hello")} >
          <input type="text" />
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
