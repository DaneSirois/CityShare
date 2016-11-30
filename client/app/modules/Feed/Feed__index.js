// Import Dependencies:
import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import style from './styles/index.css';

import ReactSwipe from 'react-swipe';
import Dropzone from 'react-dropzone';
import axios from 'axios';

import TopicsList__container from './Feed__container__TopicsList.js';
import UpdateBar__container from './Feed__container__UpdateBar.js';

// Root Component:
class Feed__module extends Component {
  constructor (props) {
    super(props);
    this.state = { name: "", image_url: "localhost:3000/public/images/default-headline-bg.jpg"}
  }

  handleInput (event) {
    this.setState({ name: event.target.value });
  }

  resetInput () {
    this.setState({ name: "" });
  }

  resetImageURL () {
    this.setState({ image_url: "localhost:3000/public/images/default-headline-bg.jpg" });
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

    axios.post('http://localhost:3000/upload', data).then((img_url) => {
      this.setState({ image_url: img_url.data });
      console.log(this.state.image_url);
      this.set_uploadStatus("COMPLETE");
    }).catch((error) => {
      console.log(error);
      this.set_uploadStatus("COMPLETE");
    });
  }

  renderHeader (adminId, userId) {
    if (adminId === userId) {
      return (
        <header className={style.Feed__header}>
          <form onSubmit={this.props.handleSubmit.bind(this)(this.state.name, this.state.img, this.props.channel_id)}>
            <textarea
              className={style.Headline__new}
              value={this.state.name}
              placeholder={"Enter a new Headline.."}
              onChange={this.handleInput.bind(this)}
            ></textarea>
            <div className={style.Feed__header__submitBar}>
              {this.state.image_url !== 'localhost:3000/public/images/default-headline-bg.jpg' ? 
              <div className={style.Uploaded__image__container}>
                <img className={style.Uploaded__image} src={this.state.image_url} />
                <div className={style.DeleteButton__container} onClick={this.resetImageURL.bind(this)}>
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div> : null}


              <Dropzone className={style.Dropzone__container} onDrop={this.onDrop.bind(this)} multiple={false} accept={'image/*'}>
                <div className={style.AddButton__container} onClick={this.resetImageURL.bind(this)}>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </div>
              </Dropzone>
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
      this.resetInput();
      dispatch(actions.newTopic(topic));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed__module);

