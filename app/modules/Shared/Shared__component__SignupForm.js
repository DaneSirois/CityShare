import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

class SignupForm__component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordConfirm: ""
    }
  }
  handleEmailInput (event) {
    this.setState({email: event.target.value});
  }
  handleUsernameInput (event) {
    this.setState({username: event.target.value});
  }
  handlePasswordInput (event) {
    this.setState({password: event.target.value});
  }
  handlePasswordConfirmInput (event) {
    this.setState({passwordConfirm: event.target.value});
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.state)}>
        <h2>Sign Up Form</h2>
        <input type="text" onChange={this.handleEmailInput.bind(this)} placeholder={"Email"} />
        <input type="text" onChange={this.handleUsernameInput.bind(this)} placeholder={"Username"} />
        <input type="text" onChange={this.handlePasswordInput.bind(this)} placeholder={"Password"} />
        <input type="text" onChange={this.handlePasswordConfirmInput.bind(this)} placeholder={"Confirm Password"} />
        <button>SignUp</button>
      </form>
    );
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (signupCreds) => (event) => {
      event.preventDefault();

      if (signupCreds.password.toString() === signupCreds.passwordConfirm.toString()) {
        const userCreds = {
          email: signupCreds.email,
          username: signupCreds.username,
          password: signupCreds.password
        }
        dispatch(actions.signUp(userCreds));
      }
    }
  }
};

export default connect(null, mapDispatchToProps)(SignupForm__component);

