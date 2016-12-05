import React, {Component} from 'react';

import style from './Auth__styles.css';

import AC from '../../action_controller.js';

class LoginForm__container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (loginCreds) {
    event.preventDefault();
    AC.dispatch__LOGIN_USER(loginCreds);
  }
  handleUsernameInput (event) {
    this.setState({username: event.target.value});
  }
  handlePasswordInput (event) {
    this.setState({password: event.target.value});
  }
  render() {
    return (
      <div className={style.Auth__form__container}>
        <form onSubmit={(event) => this.handleSubmit(this.state)}>
          <input className={style.Auth__input} type="text" onChange={this.handleUsernameInput.bind(this)} placeholder={"Email"} />
          <input className={style.Auth__input} type="password" onChange={this.handlePasswordInput.bind(this)} placeholder={"Password"} />
          <button className={style.Auth__input__submitButton}>Login</button>
        </form>
      </div>
    );
  };
};


export default LoginForm__container;

