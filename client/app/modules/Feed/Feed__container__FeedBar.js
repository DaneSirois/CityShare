import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';
import style from './styles/index.css';

class FeedBar__container extends Component {
  constructor(props) {
    super(props)
    this.state = {update: ''}
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({update: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.update, this.props.topics[0].id);
    this.setState({ update: '' })
  }

  render() {
    if (this.props.topics.length && this.props.adminId === this.props.userId) {
      return (
        <footer className={style.footer}>
          <textarea className={style.input} onChange={this.handleInputChange} value={this.state.update} type="text">
          </textarea>
          <button className={style.submit} onClick={this.handleSubmit.bind(this)}>Update</button>
        </footer>
      )
    } else {
      return (
        <footer className={style.footer}>
        </footer>
      )
    }
  }
};

function mapStateToProps(state) {
  return ({
    topics: state.Feed.topics,
    loggedIn: state.User.loggedIn,
    userId: state.User.userId,
    adminId: state.Feed.adminId
  });
};


const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (updateText, topic_id) => {
      let update = {
        content: updateText,
        topic_id: topic_id
      }
      dispatch(actions.newUpdate(update));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedBar__container);
