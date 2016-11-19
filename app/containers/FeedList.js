import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Update from '../components/Update.js';

class FeedList extends Component {
  renderMessage(update) {
    return (
      <Update
        key={update.id}
        content={update.content} />
    );
  }

  render() {
    return(
      <div id="feed-list">
        {this.props.updates.map(this.renderMessage.bind(this))}
      </div>
    );
  }
}

function mapStateToProps(state){
  return { updates: state.updates }
}

export default connect(mapStateToProps)(FeedList);