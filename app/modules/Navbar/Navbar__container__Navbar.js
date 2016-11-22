import React, {Component} from 'react';
import {connect} from 'react-redux';

// Styles:
import Navbar from './styles/Navbar__styles__Navbar.css';
import Location from './Navbar__container__location.js';

import Auth__module from '../Auth/Auth__index.js';

class Navbar__container extends Component {
  render() {
    return (
      <nav className={Navbar.container}>
        <Auth__module />
        <Location/>
      </nav>
    );
  };
};

export default Navbar__container;