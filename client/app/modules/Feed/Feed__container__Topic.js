import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import Update__component from './Feed__component__Update.js';

import style from './styles/index.css'

class Topic__container extends Component {
  constructor (props) {
    super(props);
    this.state = { name: this.props.topicData.name, nameStatic: '', img_url: '' }
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
      this.props.handleSubmit(this.state.name, this.state.img_url, this.props.channel_id);
      this.setState({nameStatic: event.target.value});
    }
  }

  revert(event) {
    this.setState({name: this.state.nameStatic})
  }

 handleImageInput(event) {
    this.setState({img_url:event.target.value})
  }

  renderHeader(topicData) {
    if (topicData.isActive && this.props.userId === this.props.adminId) {
      return (
        <div>
          <input
            className={style.activeTopic}
            value={this.state.name}
            onFocus={this.holdStatic.bind(this)}
            onChange={this.handleInput.bind(this)}
            onKeyUp={this.changeTopic.bind(this)}
            onBlur={this.revert.bind(this)} />
          <input className={style.imgInput}
            placeholder="image url (optional)"
            value={this.state.img_url}
            onChange={this.handleImageInput.bind(this)}
          />
        </div>
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
            created_at = {update.created_at} />
        )
      }
    });
  }

  render() {
    return (
      <article className={style.topic}>
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
    updates: state.Feed.updates,
    userId: state.User.userId,
    adminId: state.Feed.adminId
  });
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (topicName, img_url, channel_id) => {
      let topic = {
        name: topicName,
        img_url: img_url,
        channel_id: channel_id
      }
      dispatch(actions.newTopic(topic));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Topic__container);
