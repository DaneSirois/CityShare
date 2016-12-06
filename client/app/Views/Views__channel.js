import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactSwipe from 'react-swipe';
import Chatroom__module from '../modules/Chatroom/Chatroom__index.js';
import Navbar__module from '../modules/Navbar/Navbar_index.js';
import Feed__module from '../modules/Feed/Feed__index.js';
import Widget__module from '../modules/Widget/Widget__index.js';
import * as actions from '../modules/Shared/actions/index.js';
import Media from 'react-media'
import style from './styles/channel.css';
import shared_style from './styles/shared.css';

class ChannelView extends Component {
  componentWillMount() {
    this.props.handleLoad(this.props.params.id);
  }

  componentWillUnmount() {
    this.props.clearChannelState();
  }


  render() {
    return (
      <div className={style.container}>
        <Media query="(max-width: 899px)">
          {matches => matches ? (
            <div>
              <div className={shared_style.Navbar__container}>
                <Navbar__module/>
              </div>
              <div className={shared_style.Widget__container}>
                <Widget__module/>
              </div>
              <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
                <div className={style.Chatroom__module}>
                  <Chatroom__module channel_id={this.props.params.id}/>
                </div>
                <div className={style.Feed__container}>
                  <Feed__module channel_id={this.props.params.id}/>
                </div>
              </ReactSwipe>
            </div>
          ) : (
            <div>
              <div className={shared_style.Navbar__container}>
                <Navbar__module/>
              </div>
              <div className={shared_style.Widget__container}>
                <Widget__module/>
              </div>

              <div className={style.Chatroom__module}>
                <Chatroom__module channel_id={this.props.params.id}/>
              </div>

              <div className={style.Feed__module}>
                <Feed__module channel_id={this.props.params.id}/>
              </div>
            </div>

          )}
          </Media>
      </div>
    );

  }
}


const mapDispatchToProps = function (dispatch) {
  return {
    handleLoad: (channel_id) => {
      dispatch(actions.fetchChannelState(channel_id));
    },
    clearChannelState: () => {
      dispatch(actions.clearChannelState());
    }
  }
};

export default connect(null, mapDispatchToProps)(ChannelView);