import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css';

import MessageList__container from './Chatroom__container__MessageList.js';

function ageInMs(dbObject) {
  return dbObject ? new Date(dbObject.created_at).getTime() : Infinity;
}

function messageTopicCoupler (messages, topicFirst, topicSecond) {
  return messages.filter((message) => {
    return  (ageInMs(message) > ageInMs(topicFirst)
      && ageInMs(message) <= ageInMs(topicSecond));
  });
}


class MasterLog__container extends Component {
  renderTopicLists(topicList) {
    return topicList.map((topic, index, topics) => {
      if(this.props.chatLog) {
        return (
          <li>
            {topic.name}
            <MessageList__container key={topic.id} messages={messageTopicCoupler(this.props.chatLog, topic, topics[index+1])} topic={topic.name} created_at={topic.created_at} />
          </li>
        )
      }
    });
  }
  render() {
    return (
      <ul>
        {this.renderTopicLists.bind(this)(this.props.topics)}
      </ul>
    );
  };
};

// GOTTA DO THIS:
function mapStateToProps(state) {
  return ({
    topics: state.Feed.topics,
    chatLog: state.Chatroom.chatLog
  });
};

export default connect(mapStateToProps)(MasterLog__container);
