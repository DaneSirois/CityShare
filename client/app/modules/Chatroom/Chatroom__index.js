// Import Dependencies:
import React, {Component} from 'react';

import style from './styles/index.css';

import MasterLog__container from './Chatroom__container__MasterLog.js';
import ChatBar__container from './Chatroom__container__ChatBar.js';

// Root Component:
class Chatroom__module extends Component {
  render() {
    return (
      <div className={style.container}>
        <MasterLog__container />
        <ChatBar__container channel_id={this.props.channel_id} />
      </div>
    );
  };
};


export default Chatroom__module;
