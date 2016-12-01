import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css';

import * as actions from '../Shared/actions/index.js';

class LoginForm__container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
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
        <form onSubmit={this.props.handleSubmit(this.state)}>
          <input className={style.Auth__input} type="text" onChange={this.handleUsernameInput.bind(this)} placeholder={"Username"} />
          <input className={style.Auth__input} type="password" onChange={this.handlePasswordInput.bind(this)} placeholder={"Password"} />
          <button className={style.Auth__input__submitButton}>Login</button>
        </form>
      </div>
    );
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (loginCreds) => (event) => {
      event.preventDefault();

      dispatch(actions.login(loginCreds));
    }
  }
};

export default connect(null, mapDispatchToProps)(LoginForm__container);

