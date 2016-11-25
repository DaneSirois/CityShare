// Import Dependencies:
import React, {Component} from 'react';

import style from './styles/index.css';

import Grid__container from './Portal__container__Grid.js';
import ChannelForm__container from './Portal__container__ChannelForm.js';

// Root Component:
class Portal__module extends Component {
  render() {
    return (
      <div>
        <Grid__container />
        <ChannelForm__container />
      </div>
    );
  };
};

export default Portal__module;