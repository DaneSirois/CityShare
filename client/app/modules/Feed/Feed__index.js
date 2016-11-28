// Import Dependencies:
import React, {Component} from 'react';

import style from './styles/index.css';
import ReactSwipe from 'react-swipe';

import HeadlineList__container from './Feed__container__HeadlineList.js';
import FeedBar__container from './Feed__container__FeedBar.js';

// Root Component:
class Feed__module extends Component {
  render() {
    return (
      <div className={style.container}>
        <HeadlineList__container channel_id={this.props.channel_id} />
        <FeedBar__container />
      </div>

    );
  };
};

export default Feed__module;
