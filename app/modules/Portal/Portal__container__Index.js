import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Masonry from 'react-masonry-component';
import Channel__component from './Portal__component__Channel.js';
import style from './styles/index.css'
import * as actions from '../Shared/actions/index.js';

var masonryOptions = {
  transitionDuration: 450,
  columnWidth: 160,
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
        <div className={[style.doge, style[this.sizeTile()]].join(" ")} key={channel.id}>
          <Link to={"channel/" + channel.id}>
            <Channel__component key={channel.id} channelData={channel} />
          </Link>
        </div>
      )
    });
  }

  sizeTile(arg1, arg2, arg3) {
    let algorithm = Math.floor(Math.random()*10);
    let size;
    if (algorithm < 5) {
      size = 'sm';
    } else if (algorithm >= 6 && algorithm < 8) {
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
      <Masonry className='Masonry' options={masonryOptions}>
        {this.renderChannels(this.props.channelList)}
      </Masonry>
    );
  };
};

function mapStateToProps(state) {
  return ({
    channelList: state.Portal.channelList,
    topics: state.Feed.topics
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
