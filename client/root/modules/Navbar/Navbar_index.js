// Import Dependencies:
import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './styles/index.css';

import BackButton__container from './Navbar__container__BackButton.js';
import Auth__module from '../Auth/Auth__index.js';
import Path__container from './Navbar__container__Path.js';
import Channel__module from '../Channel/Channel__index.js';

// Root Component:
class Navbar__module extends Component {
  renderBackButton (channelName) {
    if (channelName) {
      return <BackButton__container />
    }
  }
  render() {
    return (
      <nav className={styles.container}>
        {this.renderBackButton.bind(this)(this.props.channelName)}
        <Path__container />
        <Channel__module />
        <Auth__module />
      </nav>
    );
  };
};

function mapStateToProps(state) {
  return ({
    channelName: state.Channel.channelName
  });
};

export default connect(mapStateToProps)(Navbar__module);