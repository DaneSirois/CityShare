// Import Dependencies:
import React, {Component} from 'react';

// import styles from './Chatroom__styles.css';

import Feedlist__container from './Feed__container__feedlist.js';
import Feedbar__container from './Feed__container__feedbar.js';

// Root Component:
class Feed__module extends Component {
  render() {
    return (
      <div>
        <Feedlist__container />
       	<Feedbar__container />
      </div>
    );
  };
};

export default Feed__module;
