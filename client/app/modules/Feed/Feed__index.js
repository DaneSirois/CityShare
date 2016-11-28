// Import Dependencies:
import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css';
import ReactSwipe from 'react-swipe';

import HeadlineList__container from './Feed__container__HeadlineList.js';
import UpdateBar__container from './Feed__container__UpdateBar.js';

// Root Component:
class Feed__module extends Component {
  renderHeader (headlinesExists, adminId, userId) {
    if (headlinesExists && adminId === userId) {
      return (
        <div className={style.Feed__header}>
          <UpdateBar__container />
        </div>
      )
    }
  }
  render() {
    console.log(this.props.headlines)
    return (
      <div className={style.Feed__container}>
        {this.renderHeader.bind(this)(this.props.headlines.length, this.props.adminId, this.props.userId)}
        <div className={style.Feed__body}>
          <HeadlineList__container channel_id={this.props.channel_id} />
        </div>
      </div>

    );
  };
};

function mapStateToProps(state) {
  return ({
    headlines: state.Feed.headlines,
    userId: state.User.userId,
    adminId: state.Feed.adminId
  });
};

export default connect(mapStateToProps)(Feed__module);
