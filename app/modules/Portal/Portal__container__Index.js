import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Masonry from 'react-masonry-component';
import Channel__component from './Portal__component__Channel.js';
import * as actions from '../Shared/actions/index.js';

var masonryOptions = {
  transitionDuration: 300,
  columnWidth: 300,
};

class Index__container extends Component {
  constructor (props) {
    super(props);
    this.renderChannels = this.renderChannels.bind(this);
  }

  componentDidMount() {
    this.props.getChannels();
  }

  renderChannels(channelList) {
    return channelList.map((channel, index) => {
      return (
        <div className={this.sizeTile() + " tile"} key={channel.id}>
          <Link to={"channel/" + channel.id}>
          <Channel__component key={index} channelData={channel} />
          </Link>
        </div>
      )
    });
  }

  sizeTile(arg1, arg2, arg3) {
    let algorithm = Math.floor(Math.random()*3);
    let size;
    if (algorithm === 0) {
      size = 'sm';
    } else if (algorithm === 1) {
      size = 'md';
    } else {
      size = 'lg'
    }
    return size;
  }

  sortTiles(channels) {

  }

  render() {
    return (
      <Masonry options={masonryOptions}>
        <h2>Portal</h2>
        {this.renderChannels(this.props.channelList)}
      </Masonry>
    );
  };
};

function mapStateToProps(state) {
  return ({
    channelList: state.Portal.channelList
  });
};

const mapDispatchToProps = function (dispatch) {
  return {
    getChannels: () => {
      dispatch(actions.getChannels());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index__container);
