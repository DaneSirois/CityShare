import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import Update__component from './Feed__component__Update.js';

class Topic__container extends Component {
  constructor (props) {
    super(props);
    this.state = { name: this.props.topicData.name, nameStatic: '' }
    this.renderUpdates = this.renderUpdates.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  holdStatic(event) {
    this.setState({nameStatic: event.target.value})
  }

  handleInput(event) {
    this.setState({name:event.target.value})
  }

  changeTopic(event) {
    if (event.key === 'Enter') {
      this.props.handleSubmit(this.state.name);
      this.setState({nameStatic: event.target.value});
    }
  }

  revert(event) {
    this.setState({name: this.state.nameStatic})
  }

  renderHeader(topicData) {
    if (topicData.isActive) {
      return (
        <input
          value={this.state.name}
          onFocus={this.holdStatic.bind(this)}
          onChange={this.handleInput.bind(this)}
          onKeyUp={this.changeTopic.bind(this)}
          onBlur={this.revert.bind(this)} />
      );
    } else {
      return (
        <h1>{topicData.name}</h1>
      );
    }
  }

  renderUpdates(updates) {
    return updates.map((update) => {
      if (update.topic_id === this.props.topicData.topic_id) {
        return (
          <Update__component
            key={update.id}
            content={update.content}
            time = {update.time} />
        )
      }
    });
  }

  render() {
    return (
      <article>
        {this.renderHeader(this.props.topicData)}
        <ul>
          {this.renderUpdates(this.props.updates)}
        </ul>
      </article>
    );
  };
};

function mapStateToProps(state) {
  return ({
    updates: state.Feed.updates
  });
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (topicName) => {
      console.log(topicName);
      dispatch(actions.newTopic(topicName));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Topic__container);
