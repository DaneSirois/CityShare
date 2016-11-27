// Import Dependencies:
import React, {Component} from 'react';

import styles from './styles/index.css';

import BackButton__container from './Navbar__container__BackButton.js';
import Auth__module from '../Auth/Auth__index.js';
import Path__container from './Navbar__container__Path.js';
import Channel__module from '../Channel/Channel__index.js';

// Root Component:
class Navbar__module extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <BackButton__container />
        <Path__container />
        <Channel__module />
        <Auth__module />
      </nav>
    );
  };
};

export default Navbar__module;