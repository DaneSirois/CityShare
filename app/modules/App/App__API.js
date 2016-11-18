// App__module - Public Interface:

import React, {Component} from 'react';

import {App__container__navbar as navbar__container} from './App__container__navbar.js';
import {Chatroom__module} from '../Chatroom/Chatroom__API.js';

class App__module extends Component {
  render() {
    return (
      <div className="App__module">
        <navbar__container />
        <Chatroom__module />
      </div>
    );
  };
};

export default App__module;
