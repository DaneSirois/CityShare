import React, {Component} from 'react';
import {connect} from 'react-redux';

import Feeditem__component from './Feed__component__feeditem.js';

class Feedlist__container extends Component {
  constructor (props) {
    super(props);
    this.renderUpdates = this.renderUpdates.bind(this);
  }
  renderUpdates(feedItems) {

    return feedItems.map((update, index) => {
      console.log(update);
      return (
        <Feeditem__component key={index} updateData={update} />
      )
    });
  }
  render() {
    return (
      <ul>
        {this.renderUpdates(this.props.feedItems)}
      </ul>
    );
  };
};

function mapStateToProps(state) {
  return ({
    feedItems: state.Feed.feedList
  });
};

export default connect(mapStateToProps)(Feedlist__container);
