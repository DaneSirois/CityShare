import React, {Component} from 'react';
import {connect} from 'react-redux';

import FeedItem__component from './Feed__component__FeedItem.js';

class FeedList__container extends Component {
  constructor (props) {
    super(props);
    this.renderUpdates = this.renderUpdates.bind(this);
  }
  renderUpdates(feedItems) {

    return feedItems.map((update, index) => {
      console.log(update);
      return (
        <FeedItem__component key={index} updateData={update} />
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

export default connect(mapStateToProps)(FeedList__container);
