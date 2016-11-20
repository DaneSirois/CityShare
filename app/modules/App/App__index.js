import React, {Component} from 'react';

import Navbar__container from '../Shared/Shared__container__Navbar.js';
import Chatroom__module from '../Chatroom/Chatroom__index.js';

class App__module extends Component {
  render() {
    return (
      <div className="App__module">
        <Navbar__container />
        <Chatroom__module />
      </div>
    );
  };
};

export default App__module;