import React, {Component} from 'react';
// Styles:
import App from './App__styles.css';

import Navbar__container from '../Shared/Shared__container__navbar.js';
import Chatroom__module from '../Chatroom/Chatroom__index.js';

class App__module extends Component {
  render() {
    return (
      <div className={App.container}>
        <Navbar__container />
        <Chatroom__module />
      </div>
    );
  };
};

export default App__module;