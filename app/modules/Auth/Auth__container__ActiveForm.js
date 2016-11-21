import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginForm__component from './LoginForm__component.js';
import SignupForm__component from './SignupForm__component.js';

class ActiveForm__container extends Component {
  constructor(props) {
    
  }
  renderForm (form) {
    if (form === "signupForm") {
      return (
        <SignupForm__component />
      )
    } else {
      return (
        <LoginForm__component />
      )
    }
  }
  render() {
    return (
      {this.renderForm(this.props.activeForm).bind(this)}
    );
  };
};

function mapStateToProps(state) {
  return ({
    activeForm: state.Auth.activeForm
  });
};

export default connect(map, mapDispatchToProps)(SignupForm__component);

