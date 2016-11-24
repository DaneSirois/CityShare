// Import Dependencies:
import React, {Component} from 'react';

import style from './styles/index.css';

import Index__container from './Portal__container__Index.js';
import ChannelForm__container from './Portal__container__ChannelForm.js';
import Navbar__container from '../Navbar/Navbar__container__Navbar.js';


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
