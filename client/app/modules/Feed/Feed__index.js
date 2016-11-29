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
  resetInput() {
    this.setState({ name: "" });
  }
  renderHeader (adminId, userId) {
    if (adminId === userId) {
      return (
        <header className={style.Feed__header}>
          <form onSubmit={this.props.handleSubmit.bind(this)(this.state.name, this.props.channel_id)}>
            <textarea
              className={style.Headline__new}
              value={this.state.name}
              placeholder={"Enter a new Headline.."}
              onChange={this.handleInput.bind(this)}
            ></textarea>
            <div className={style.Feed__header__submitBar}>
              <button className={style.UpdateBar__button}>Submit</button>
            </div>
          </form>
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
    handleSubmit: (topicName, img_url, channel_id) => (event) => {
      event.preventDefault();
      let topic = {
        name: topicName,
        img_url: img_url,
        channel_id: channel_id
      }
      dispatch(actions.newTopic(topic));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed__module);

