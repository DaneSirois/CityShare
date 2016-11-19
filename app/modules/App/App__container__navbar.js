import React, {Component} from 'react';
import {connect} from 'react-redux';

import LoginForm__container from '../Shared/Shared__component__loginForm';
import SignupForm__container from '../Shared/Shared__component__signupForm';

class Navbar__container extends Component {
  render() {
    return (
      <nav>
        <SignupForm__container />
        <LoginForm__container />
      </nav>
    );
  };
};

export default Navbar__container;