import React, {Component} from 'react';
import {connect} from 'react-redux';

import ReactSwipe from 'react-swipe';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import * as actions from '../Shared/actions/index.js';
import style from './styles/index.css';

class ChannelForm__container extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      tags: '',
      headline: '',
      image_url: ''
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
    this.props.handleSubmit(this.state.name, this.state.tags, this.state.headline, this.state.image_url);
    this.setState({ name: '', tags: '' })
  }

  resetInput () {
    this.setState({ headline: "" });
  }

  resetImageURL () {
    this.setState({ image_url: "159.203.42.30:3000/public/images/default-headline-bg.jpg" });
  }

  handleInput (event) {
    this.setState({ headline: event.target.value });
  }

  set_uploadStatus(status) {
    return this.setState({ upload_status: status });
  }

  onDrop (imageFile) {
    this.set_uploadStatus("PENDING");
    const data = new FormData();

    data.append('action', 'ADD');
    data.append('param', 0);
    data.append('secondParam', 0);
    data.append('file', new Blob(imageFile, { type: 'image/jpeg' }));

    axios.post('http://159.203.35.124:3000/upload', data).then((img_url) => {
      this.setState({ image_url: img_url.data });
      console.log(this.state.image_url);
      this.set_uploadStatus("COMPLETE");
    }).catch((error) => {
      console.log(error);
      this.set_uploadStatus("COMPLETE");
    });
  }

  render() {
    return (
      <div className={style.ChannelForm__container}>
        <form className={style.ChannelForm}>
          <h2 className={style.ChannelForm__header__text}>Create a New Channel:</h2>
          <input className={style.ChannelForm__input} type="text" onChange={this.handleNameInput.bind(this)} placeholder="Name your channel." />
          <div className={style.ChannelForm__headline__container}>
            <textarea
              className={style.ChannelForm__textarea}
              value={this.state.headline}
              placeholder={"Enter a new Headline.."}
              onChange={this.handleInput.bind(this)}
              maxLength='90'
            />
            <div className={style.ChannelForm__headline__imageBar}>
              {this.state.image_url !== '159.203.35.124:3000/public/images/default-headline-bg.jpg' ?
              <div className={style.Uploaded__image__container}>
                <img className={style.Uploaded__image} src={this.state.image_url} />
                <div className={style.DeleteButton__container} onClick={this.resetImageURL.bind(this)}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div> : null}

              <Dropzone className={style.Dropzone__container} onDrop={this.onDrop.bind(this)} multiple={false} accept={'image/*'}>
                <div className={style.AddButton__container} onClick={this.resetImageURL.bind(this)}>
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                </div>
              </Dropzone>
            </div>
          </div>
          <input className={style.ChannelForm__input} type="text" onChange={this.handleTagInput.bind(this)} placeholder="List some tags." />

          <button className={style.ChannelForm__input__submitButton} onClick={this.handleSubmit.bind(this)}>Create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (name, tags, headline, img_url) => {
      const channelData = {
        name: name,
        tags: tags.split(' '),
        headline: headline,
        img_url: img_url
      }
      console.log(channelData);
      dispatch(actions.newChannel(channelData));
      dispatch(actions.RenderApp(false))
      dispatch(actions.getChannels());
    }
  }
}

export default connect(null, mapDispatchToProps)(ChannelForm__container);
