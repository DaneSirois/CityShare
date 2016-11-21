import React, {Component} from 'react';
import {connect} from 'react-redux';

// Styles:
// import Navbar from './styles/Shared__styles__Navbar.css';

import Auth__module from '../Auth/Auth__index.js';

class Navbar__container extends Component {
  render() {
    return (
      <nav className={Navbar.container}>
        <Auth__module />
      </nav>
    );
  };
};

export default Navbar__container;