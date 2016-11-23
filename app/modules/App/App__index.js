import React, {Component} from 'react';
import {connect} from 'react-redux';

// Styles:
import App from './App__styles.css';
import { Router, Route, hashHistory } from 'react-router';

import Loading__module from '../Loading/Loading__index.js';
import Portal__module from '../Portal/Portal__index.js';
import Chatroom__module from '../Chatroom/Chatroom__index.js';
import Feed__module from '../Feed/Feed__index.js';
import Channel__view from '../../Views/Views__channel.js';

class App__module extends Component {
  render() {
    if (this.props.renderApp === false) {
      return <Loading__module />
    } else {
      return (
        <Router history={hashHistory}>
          <Route path="/" component={Portal__module}/>
          <Route path="/portal" component={Portal__module} />
          <Route path="/channel/:id" component={Channel__view} />
        </Router>
      )
    }
  };
};

function mapStateToProps(state) {
  return ({
    renderApp: state.App.RenderApp
  });
};

export default connect(mapStateToProps, null)(App__module);