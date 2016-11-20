import React, {Component} from 'react';
import {connect} from 'react-redux';

// Styles:
import Navbar from './styles/Shared__styles__Navbar.css';

import LoginForm__container from './Shared__component__loginForm';
import SignupForm__container from './Shared__component__signupForm';

class Navbar__container extends Component {
  render() {
    return (
      <nav className={Navbar.container}>
        <div className={Navbar.authButton_container}>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
        <SignupForm__container />
        <LoginForm__container />
      </nav>
    );
  };
};

export default Navbar__container;