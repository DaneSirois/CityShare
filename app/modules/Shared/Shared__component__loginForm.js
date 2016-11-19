import React, {Component} from 'react';

class LoginForm__component extends Component {
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
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <form>
        <input type="text" onChange={this.handleUsernameInput.bind(this)} />
        <input type="text" onChange={this.handlePasswordInput.bind(this)} />
        <button>Login</button>
      </form>
    );
  };
};


export default LoginForm__component;
