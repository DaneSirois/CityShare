// Import Dependencies:
import React, {Component} from 'react';

import styles from './Portal__styles.css';

import Index__container from './Portal__container__Index.js';
import ChannelForm__container from './Portal__container__ChannelForm.js';
// Root Component:
class Portal__module extends Component {
  render() {
    return (
      <div>
        <Index__container />
        <ChannelForm__container />
      </div>
    );
  };
};

export default Portal__module;
