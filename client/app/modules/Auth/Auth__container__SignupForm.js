import React, {Component} from 'react';
import {connect} from 'react-redux';

import AC from '../../action_controller.js';
import style from './Auth__styles.css';

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
        <form onSubmit={(event) => this.props.handleSubmit.bind(this)(this.state)}>
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

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (signupCreds) => {
      event.preventDefault();

      if (signupCreds.password.toString() === signupCreds.passwordConfirm.toString()) {
        const userCreds = {
          email: signupCreds.email,
          username: signupCreds.username,
          password: signupCreds.password
        }
        dispatch(AC.request__SIGNUP_USER(userCreds));
      }
    }
  };
};

export default connect(null, mapDispatchToProps)(SignupForm__container);

