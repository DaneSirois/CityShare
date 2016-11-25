import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';
import style from './styles/index.css';

class ChatBar__container extends Component {
  constructor(props) {
    super(props)
    this.state = {message: ''}
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
      this.setState({message: event.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.message, this.props.channel_id);
    this.setState({ message: '' })
  }

  renderInputBar(loggedIn) {
    if (this.props.loggedIn) {
      return (
          <input className={style.input} onChange={this.handleInputChange} value={this.state.message} type="text" />
      )
    } else {
      return (
          <input className={style.input} placeholder="Please sign in to chat" type="text" value={this.state.message} disabled />
      )
    }
  }

  render() {
    return (
      <footer className={style.footer}>
        <form className={style.input_form} onSubmit={this.handleSubmit.bind(this)}>
          {this.renderInputBar(this.props.loggedIn)}
        </form>
      </footer>
    )
  }
};

const mapStateToProps = function (state) {
  return ({
    loggedIn: state.User.loggedIn
  })
}


const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (message_text, channel_id) => {
      let message = { message_text, channel_id }
      dispatch(actions.newMessage(message));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatBar__container);
