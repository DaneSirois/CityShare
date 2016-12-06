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
    if (this.containerEl) {
      this.containerEl.scrollTop = this.containerEl.scrollHeight;
    } else {
      this.scrollTop = this.scrollHeight;
    }
  }

  render() {
    return (
      <div className={style.container} ref={(el) => this.containerEl = el}>
        <MasterLog__container channel_id ={this.props.channel_id} handleUpdate={this.scrollToBottom.bind(this)} />
        <ChatBar__container channel_id={this.props.channel_id} />
      </div>

    );
  };
};


export default Chatroom__module;
