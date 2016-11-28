import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import Update__component from './Feed__component__Update.js';

import style from './styles/index.css'

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
      this.props.handleSubmit(this.state.name, this.props.channel_id);
      this.setState({nameStatic: event.target.value});
    }
  }

  revert(event) {
    this.setState({name: this.state.nameStatic})
  }

  renderHeader(topicData) {
    if (topicData.isActive && this.props.userId === this.props.adminId) {
      return (
        <input
          className={style.headline__active}
          value={this.state.name}
          onFocus={this.holdStatic.bind(this)}
          onChange={this.handleInput.bind(this)}
          onKeyUp={this.changeTopic.bind(this)}
          onBlur={this.revert.bind(this)} />
      );
    } else {
      return (
        <h2 className={style.Headline__title}>{topicData.name}</h2>
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
      <article className={style.Headline}>
        <header className={style.Headline__header}>
          {this.renderHeader(this.props.topicData)}
        </header>
        <div className={style.Headline__body}>
          <ul>
            {this.renderUpdates(this.props.updates)}
          </ul>
        </div>
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
    handleSubmit: (topicName, channel_id) => {
      let topic = {
        name: topicName,
        channel_id: channel_id
      }
      dispatch(actions.newTopic(topic));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Topic__container);
