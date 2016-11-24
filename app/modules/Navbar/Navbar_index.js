// Import Dependencies:
import React, {Component} from 'react';

import styles from './styles/index.css';

import Auth__module from '../Auth/Auth__index.js';
import Location__container from './Navbar__container__location.js';

// Root Component:
class Navbar__module extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <Location__container />
        <Auth__module />
      </nav>
    );
  };
};

export default Navbar__module;