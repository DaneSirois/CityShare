// Import Dependencies:
import React, {Component} from 'react';

import style from './styles/index.css';
import ReactSwipe from 'react-swipe';
// import styles from './Chatroom__styles.css';

import FeedList__container from './Feed__container__FeedList.js';
import TopicsList__container from './Feed__container__TopicsList.js';
import FeedBar__container from './Feed__container__FeedBar.js';

// Root Component:
class Feed__module extends Component {
  render() {
    return (
      <div className={style.container}>
        <TopicsList__container channel_id={this.props.channel_id} />
        <FeedBar__container />
      </div>

    );
  };
};

export default Feed__module;
