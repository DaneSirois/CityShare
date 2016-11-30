// Import Dependencies:
import React, {Component} from 'react';

import styles from './styles/index.css';

import SearchBar__container from './Tags__container__SearchBar.js';

// Root Component:
class Tags__module extends Component {
  render() {
    return (
      <nav className={styles.container}>
        <SearchBar__container />
      </nav>
    );
  };
};

export default Tags__module;