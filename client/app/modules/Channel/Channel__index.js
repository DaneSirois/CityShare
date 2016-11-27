// Import Dependencies:
import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './styles/index.css';

import NewChannelButton__container from './Channel__container__NewChannelButton.js';
import ChannelForm__container from './Channel__container__ChannelForm.js';

// Root Component:
class Channel__module extends Component {
  renderButton (loggedIn) {
    if (loggedIn) {
      return (
        <NewChannelButton__container />
      )
    }
  }
  renderFormWindow (status, loggedIn) {
    if (status === "OPEN" && loggedIn) {
      return <ChannelForm__container />
    }
  }
  render() {
    return (
      <div>
        {this.renderButton(this.props.loggedIn)}
        {this.renderFormWindow(this.props.current_formState, this.props.loggedIn)}
      </div>
    );
  };
};

const mapStateToProps = function (state) {
  return {
    current_formState: state.Channel.current_formState,
    loggedIn: state.User.loggedIn
  }
};

export default connect(mapStateToProps)(Channel__module);
