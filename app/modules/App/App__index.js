import React, {Component} from 'react';
// Styles:
import App from './App__styles.css';

import Navbar__container from '../Shared/Shared__container__Navbar.js';
import Chatroom__module from '../Chatroom/Chatroom__index.js';
import Feed__module from '../Feed/Feed__index.js';
class App__module extends Component {
  render() {
    return (
      <div className={App.container}>
        <Navbar__container />
        <Chatroom__module />
        <Feed__module />
      </div>
    );
  };
};

export default App__module;