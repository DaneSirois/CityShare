import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';
import style from './styles/index.css';

class UpdateBar__container extends Component {
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
    return (
      <div className={style.UpdateBar}>
        <textarea className={style.UpdateBar__textarea} onChange={this.handleInputChange} placeholder={"Make an update:"} value={this.state.update} type="text"></textarea>
        <footer className={style.UpdateBar__footer}>
          <button className={style.UpdateBar__button} onClick={this.handleSubmit.bind(this)}>Post</button>
        </footer>
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBar__container);
