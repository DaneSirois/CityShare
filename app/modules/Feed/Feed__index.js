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
        <FeedList__container />
        <TopicsList__container />
       	<FeedBar__container />
      </div>
    );
  };
};

export default Feed__module;
