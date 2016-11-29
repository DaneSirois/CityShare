// Import Dependencies:
import React, {Component} from 'react';
import style from './styles/index.css';
import ReactSwipe from 'react-swipe';
import MasterLog__container from './Chatroom__container__MasterLog.js';
import ChatBar__container from './Chatroom__container__ChatBar.js';
import * as ReactDOM from 'react-dom';
// Root Component:
class Chatroom__module extends Component {

	componentDidUpdate() {
    this.props.handleUpdate();
  }

  scrollToBottom() {
    this.containerEl.scrollTop = this.containerEl.scrollHeight;
  }

  render() {
    return (
      <div className={style.container} ref={(el) => this.containerEl = el}>
        <MasterLog__container handleUpdate={this.scrollToBottom.bind(this)} />
        <ChatBar__container channel_id={this.props.channel_id} />
      </div>
      
    );
  };
};


export default Chatroom__module;
