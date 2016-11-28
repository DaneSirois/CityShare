// Import Dependencies:
import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css';
import ReactSwipe from 'react-swipe';

import TopicsList__container from './Feed__container__TopicsList.js';
import UpdateBar__container from './Feed__container__UpdateBar.js';

// Root Component:
class Feed__module extends Component {
  renderHeader (headlinesExists, adminId, userId) {
    if (headlinesExists && adminId === userId) {
      return (
        <div className={style.Feed__header}>
          <UpdateBar__container />
        </div>
      )
    }
  }
  render() {
    return (
      <div className={style.Feed__container}>
        {this.renderHeader.bind(this)(this.props.topics.length, this.props.adminId, this.props.userId)}
        <div className={style.Feed__body}>
          <TopicsList__container channel_id={this.props.channel_id} />
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    topics: state.Feed.topics,
    userId: state.User.userId,
    adminId: state.Feed.adminId
  });
};

export default connect(mapStateToProps)(Feed__module);

