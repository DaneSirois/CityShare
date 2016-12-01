// Import Dependencies:
import React, {Component} from 'react';

import styles from './styles/index.css';

import TagBar__container from './Tags__container__TagBar.js';

// Root Component:
class Tags__module extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <TagBar__container />
      </nav>
    );
  };
};

export default Tags__module;