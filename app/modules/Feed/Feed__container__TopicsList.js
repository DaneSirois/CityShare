import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';
import style from './styles/index.css';

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
            <Topic__container key={topic.id} channel_id={this.props.channel_id} topicData={ {name: topic.name, topic_id: topic.id, isActive: isActive} }/>
          )
        }
      });
    } else {
      return(
        <form onSubmit={this.props.handleSubmit(this.state.topic, this.props.channel_id)} >
          <h2>Enter Topic</h2>
          <input onChange={this.handleInputChange.bind(this)} type="text" placeholder="Set a topic" />
        </form>
      )
    }
  }

  render() {
    return (
      <ul className={style.TopicsList}>
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
