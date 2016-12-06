// Import Dependencies:
import React, {Component} from 'react';

import navbar__style from './Partial__navbar__style.css';

import Navbar__module from '../modules/Navbar/Navbar_index.js';

// The View:
class Navbar__partial extends Component {
  render() {
    return (
      <div className={navbar__style.container}>
        <Navbar__module />
      </div>
    );
  };
};

export default Navbar__partial;