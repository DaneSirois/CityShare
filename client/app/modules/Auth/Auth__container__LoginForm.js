import React, {Component} from 'react';
import {connect} from 'react-redux';

import AC from '../../action_controller.js';
import style from './Auth__styles.css';

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
        <form onSubmit={(event) => this.props.handleSubmit.bind(this)(this.state)}>
          <input className={style.Auth__input} type="text" onChange={this.handleUsernameInput.bind(this)} placeholder={"Email"} />
          <input className={style.Auth__input} type="password" onChange={this.handlePasswordInput.bind(this)} placeholder={"Password"} />
          <button className={style.Auth__input__submitButton}>Login</button>
        </form>
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: (loginCreds) => {
      event.preventDefault();
      dispatch(AC.request__LOGIN_USER(loginCreds));
    }
  };
};

export default connect(null, mapDispatchToProps)(LoginForm__container);

