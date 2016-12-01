import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css';

import * as actions from '../Shared/actions/index.js';

class SignupForm__container extends Component {
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
      <div className={style.Auth__form__container}>
        <form onSubmit={this.props.handleSubmit(this.state)}>
          <input className={style.Auth__input} type="text" onChange={this.handleEmailInput.bind(this)} placeholder={"Email"} />
          <input className={style.Auth__input} type="text" onChange={this.handleUsernameInput.bind(this)} placeholder={"Username"} />
          <input className={style.Auth__input} type="password" onChange={this.handlePasswordInput.bind(this)} placeholder={"Password"} />
          <input className={style.Auth__input} type="password" onChange={this.handlePasswordConfirmInput.bind(this)} placeholder={"Confirm Password"} />
          <button className={style.Auth__input__submitButton}>SignUp</button>
        </form>
      </div>
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
        console.log('TESTING INSIDE OF Auth__container__SignupForm for form submission');
        dispatch(actions.signup(userCreds));
      }
    }
  }
};

export default connect(null, mapDispatchToProps)(SignupForm__container);

