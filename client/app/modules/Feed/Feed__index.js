// Import Dependencies:
import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import style from './styles/index.css';
import ReactSwipe from 'react-swipe';

import TopicsList__container from './Feed__container__TopicsList.js';
import UpdateBar__container from './Feed__container__UpdateBar.js';

// Root Component:
class Feed__module extends Component {
  constructor (props) {
    super(props);
    this.state = { name: "" }
  }

  handleInput(event) {
    this.setState({ name: event.target.value });
  }

  changeTopic(event) {
    if (event.key === 'Enter') {
      this.props.handleSubmit(this.state.name, this.props.channel_id);
    }
  }

  renderHeader (adminId, userId) {
    if (adminId === userId) {
      return (
        <header className={style.Feed__header}>
          <textarea
            className={style.Headline__new}
            value={this.state.name}
            placeholder={"Enter a new Headline.."}
            onChange={this.handleInput.bind(this)}
            onKeyUp={this.changeTopic.bind(this)}
          ></textarea>
        </header>
      )
    }
  }
  renderBody (adminId, userId) {
    if (adminId === userId) {
      return (
        <div className={style.Feed__body}>
          <TopicsList__container channel_id={this.props.channel_id} />
        </div>
      )
    } else {
      return (
        <div className={style.Feed__body__admin}>
          <TopicsList__container channel_id={this.props.channel_id} />
        </div>
      )
    }
  }
  render() {
    return (
      <div className={style.Feed__container}>
        {this.renderHeader.bind(this)(this.props.adminId, this.props.userId)}
        {this.renderBody.bind(this)(this.props.adminId, this.props.userId)}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
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

export default connect(mapStateToProps, mapDispatchToProps)(Feed__module);

