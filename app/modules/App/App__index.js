import React, {Component} from 'react';
// Styles:
import App from './App__styles.css';


import Portal__module from '../Portal/Portal__index.js';
import Chatroom__module from '../Chatroom/Chatroom__index.js';
import Feed__module from '../Feed/Feed__index.js';

class App__module extends Component {
  render() {
    return (
      <div className={App.container}>
      </div>
    );
  };
};

export default App__module;