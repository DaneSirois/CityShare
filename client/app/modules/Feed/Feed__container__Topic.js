import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import Update__component from './Feed__component__Update.js';
import UpdateBar__container from './Feed__container__UpdateBar.js';

import style from './styles/index.css'

class Topic__container extends Component {
  renderUpdateBar(topicData) {
    if (topicData.isActive && this.props.userId === this.props.adminId) {
      return (
        <UpdateBar__container />
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
            created_at={update.created_at} 
          />
        )
      }
    });
  }

  render() {
    console.log(style);
    const localstyle = {
      backgroundImage: 'url(' + this.props.topicData.img_url + ')'
    }

    return (
      <article className={style.Headline}>
        <header style={localstyle} className={style.Headline__header}>
          <h2 className={style.Headline__title}>{this.props.topicData.name}</h2>
        </header>
        <div className={style.Headline__body}>
          {this.renderUpdateBar.bind(this)(this.props.topicData)}
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

export default connect(mapStateToProps)(Topic__container);

