import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import Update__component from './Feed__component__Update.js';

import style from './styles/index.css'

class Headline__container extends Component {
  constructor (props) {
    super(props);
    this.state = { title: this.props.headlineData.title, nameStatic: '' }
    this.renderUpdates = this.renderUpdates.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  holdStatic(event) {
    this.setState({nameStatic: event.target.value})
  }

  handleInput(event) {
    this.setState({title: event.target.value})
  }

  changeHeadline(event) {
    if (event.key === 'Enter') {
      this.props.handleSubmit(this.state.title, this.props.channel_id);
      this.setState({nameStatic: event.target.value});
    }
  }

  revert(event) {
    this.setState({title: this.state.nameStatic})
  }

  renderHeader(headlineData) {
    if (headlineData.isActive && this.props.userId === this.props.adminId) {
      return (
        <input
          className={style.activeHeadline}
          value={this.state.name}
          onFocus={this.holdStatic.bind(this)}
          onChange={this.handleInput.bind(this)}
          onKeyUp={this.changeHeadline.bind(this)}
          onBlur={this.revert.bind(this)} />
      );
    } else {
      return (
        <h2 className={style.Headline__title}>{headlineData.title}</h2>
      );
    }
  }

  renderUpdates(updates) {
    return updates.map((update) => {
      if (update.topic_id === this.props.headlineData.headline_id) {
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
        <header className={style.Headline__container}>
          {this.renderHeader(this.props.headlineData)}
        </header>
        <div className={style.Updates__container}>
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
    handleSubmit: (headlineTitle, channel_id) => {
      let headline = {
        title: headlineTitle,
        channel_id: channel_id
      }
      dispatch(actions.HEADLINE_NEW(headline));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Headline__container);
