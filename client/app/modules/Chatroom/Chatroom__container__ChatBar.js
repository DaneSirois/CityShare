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
  render() {
    return (
      <footer className={style.footer}>
        <form className={style.input_form} onSubmit={this.props.handleSubmit(this.state.message, this.props.channel_id)} >
          <input className={style.input} onChange={this.handleInputChange} type="text" />
        </form>
      </footer>
    )
  }
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (messageText, channel_id) => (event) => {
      event.preventDefault();
      let message = {
        message_text: messageText,
        channel_id: channel_id
      }
      dispatch(actions.newMessage(message));
    }
  }
};

export default connect(null, mapDispatchToProps)(ChatBar__container);
