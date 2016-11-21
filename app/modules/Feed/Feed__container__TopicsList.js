import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import Topic__container from './Feed__container__Topic.js';

class TopicsList__container extends Component {
  constructor (props) {
    super(props);
    this.state = {topic: ''}
    this.renderTopics = this.renderTopics.bind(this);
  }

  handleInputChange(event) {
    this.setState({topic: event.target.value});
  }

  renderTopics(topics) {
    if (topics.length) {
      return topics.map((topic, i) => {
        let isActive = i === 0 ? true : false;
        return (
          <Topic__container key={topic.id} topicData={ {name: topic.name, topic_id: topic.id, isActive: isActive} }/>
        )
      });
    } else {
      return(
        <form onSubmit={this.props.handleSubmit(this.state.topic)} >
          <h2>Enter Topic</h2>
          <input onChange={this.handleInputChange.bind(this)} type="text" placeholder="Set a topic" />
        </form>
      )
    }
  }

  render() {
    return (
      <ul>
        {this.renderTopics(this.props.topics)}
      </ul>
    );
  };
};

function mapStateToProps(state) {
  return ({
    topics: state.Feed.topics
  });
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (topicName) => (event) => {
      event.preventDefault();

      dispatch(actions.newTopic(topicName));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList__container);
