import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './styles/index.css';

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
        if (Number(topic.channel_id) === Number(this.props.channel_id)) {
          let isActive = i === 0 ? true : false;
          return (
            <Topic__container key={topic.id} channel_id={this.props.channel_id} topicData={ {name: topic.name, created_at: topic.created_at, topic_id: topic.id, isActive: isActive} }/>
          )
        }
      });
    } else {
      return(
        <div className={style.spinner}></div>
      )
    }
  }

  render() {
    return (
      <ul>
        {this.renderTopics.bind(this)(this.props.topics)}
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
    handleSubmit: (topicName, channel_id) => (event) => {
      event.preventDefault();
      let topic = {
        name: topicName,
        channel_id: channel_id
      }
      dispatch(actions.newTopic(topic));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicsList__container);
