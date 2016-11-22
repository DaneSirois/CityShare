// Import Dependencies:
import React, {Component} from 'react';

// import styles from './Chatroom__styles.css';

import FeedList__container from './Feed__container__FeedList.js';
import TopicsList__container from './Feed__container__TopicsList.js';
import FeedBar__container from './Feed__container__FeedBar.js';

// Root Component:
class Feed__module extends Component {
  render() {
    return (
      <div>
        <TopicsList__container channel_id={this.props.channel_id} />

      </div>
    );
  };
};

export default Feed__module;
