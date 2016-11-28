import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css';

import MessageList__container from './Chatroom__container__MessageList.js';

function ageInMs(dbObject) {
  return dbObject ? new Date(dbObject.created_at).getTime() : Infinity;
}

function messageHeadlineCoupler (messages, headlineFirst, headlineSecond) {
  return messages.filter((message) => {
    return (ageInMs(message) > ageInMs(headlineFirst)
      && ageInMs(message) <= ageInMs(headlineSecond));
  });
}

class MasterLog__container extends Component {
  renderHeadlineLists(headlineList) {
    let headlines = headlineList.map((headline) => headline);

    return headlines.reverse().map((headline, index, headlines) => {
      if(this.props.chatLog) {
        return (
          <li className={style.Headline__divider} key={headline.id}>
            <p className={style.Headline__title}>{headline.name}</p>
            <MessageList__container key={headline.id} messages={messageHeadlineCoupler(this.props.chatLog, headline, headlines[index+1])} created_at={headline.created_at} />
          </li>
        )
      }
    });
  }
  render() {
    return (
      <ul className={style.masterLogContainer}>
        {this.renderHeadlineLists.bind(this)(this.props.headlines)}
      </ul>
    );
  };
};

// GOTTA DO THIS:
function mapStateToProps(state) {
  return ({
    headlines: state.Feed.headlines,
    chatLog: state.Chatroom.chatLog
  });
};

export default connect(mapStateToProps)(MasterLog__container);
