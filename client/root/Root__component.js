// Import Dependencies:
import { Router, Route, hashHistory } from 'react-router';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import Portal__View from './Views/View__Portal.js';
import Channel__View from './Views/View__Channel.js';

import Loading__module from './modules/Loading/Loading__index.js';

import AC from './action_controller.js';

class Root__component extends Component {
  render() {
    if (this.props.RENDER_APP === false) {
      return <Loading__module />
    } else {
      return (
        <Router history={hashHistory}>
          <Route path="/" component={Portal__View} />
          <Route path="/channel/:id" component={Channel__View} />
        </Router>
      )
    }
  };
};

function mapStateToProps(state) {
  return ({
    RENDER_APP: state.App.RENDER_APP
  });
};

export default connect(mapStateToProps, null)(Root__component);