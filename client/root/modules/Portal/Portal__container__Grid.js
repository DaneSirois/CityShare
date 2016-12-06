import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Masonry from 'react-masonry-component';

import Tile__component from './Portal__container__Tile.js';

import style from './styles/index.css'
import * as actions from '../Shared/actions/index.js';

const masonryOptions = {
  transitionDuration: 420 ,
  columnWidth: 200,
  fitWidth: true
};

class Grid__container extends Component {
  constructor (props) {
    super(props);
    this.renderChannels = this.renderChannels.bind(this);
    this.countUsersInChannel = this.countUsersInChannel.bind(this);
  }

  componentWillMount() {
    this.props.getChannels();
  }

  sizeTile(arg1, arg2, arg3) {
  }

  countUsersInChannel(userArray, channel_id) {
    return userArray.reduce((count, socketChannel) => {
      return socketChannel  === channel_id ? count += 1 : count;
    }, 0);
  }

  renderChannels(channels) {
    let sizes = ['lg', 'sm', 'sm', 'md', 'md', 'sm', 'sm','lg', 'sm', 'md', 'sm', 'sm', 'lg', 'md', 'sm', 'sm', 'sm', 'md', 'lg', 'sm', 'sm', 'sm', 'sm', 'md', 'sm', 'md', 'sm', 'sm', 'sm']
    sizes = ['lg', 'md', 'sm', 'sm', 'sm', 'md', 'lg', 'sm', 'sm', 'sm', 'sm', 'md', 'sm', 'md', 'sm', 'sm', 'sm']
    // console.log(this.props.messages);
    return channels.sort((a,b) => b.score - a.score).filter((channel) => {
      if (this.props.filter.length) {
        return this.props.filter.find((id) => channel.id === id)
      } else {
        return true;
      }
    })
    .map((channel, index) => {
      return (
        <div className={[style.doge, style[sizes[index % sizes.length]]].join(" ")} key={channel.id}>
          <Link to={"channel/" + channel.id}>
            <Tile__component channelData={channel} headline={channel.headline} img_url={channel.img_url} userCount={this.countUsersInChannel(this.props.userCount, channel.id)}/>
          </Link>
        </div>
      )
    });
  }

  render() {
    return (
      <Masonry className={[style.Masonry, style.Grid].join(" ")} options={masonryOptions}>
        {this.renderChannels(this.props.channels)}
      </Masonry>
    );
  };

};

function mapStateToProps(state) {
  return ({
    channels: state.Portal.refreshPortal,
    userCount: state.Portal.userCount,
    headlines: state.Feed.topics,
    updates: state.Feed.updates,
    messages: state.Chatroom.messages,
    filter: state.Tags.filterChannels
  });
}

Grid__container.defaultProps = {messages: []}

const mapDispatchToProps = function (dispatch) {
  return {
    getChannels: () => {
      dispatch(actions.getChannels());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid__container);