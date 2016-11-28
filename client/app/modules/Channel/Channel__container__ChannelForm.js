import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';
import style from './styles/index.css';

class ChannelForm__container extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      tags: ''
    }
  }

  handleNameInput(event) {
    this.setState({ name: event.target.value })
  }

  handleTagInput(event) {
    this.setState({ tags: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.name, this.state.tags);
    this.setState({ name: '', tags: '' })
  }

  render() {
    return (
      <div className={style.ChannelForm__container}>
        <form id="new-channel" onSubmit={this.props.handleSubmit(this.state.name, this.state.tags)}>
          <h2>New Channel</h2>
          <input type="text" onChange={this.handleNameInput.bind(this)} placeholder="Name your channel." />
          <textarea onChange={this.handleTagInput.bind(this)} placeholder="List some tags." />
          <button>Create</button>
        </form>
      </div>
    );
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (name, tags) => {
      const channelData = {
        name,
        tags: tags.split(' ')
      }
      dispatch(actions.newChannel(channelData));
    }
  }
};

export default connect(null, mapDispatchToProps)(ChannelForm__container);
