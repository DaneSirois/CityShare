import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import Masonry from 'react-masonry-component';

import Tile__component from './Portal__component__Tile.js';

import style from './styles/index.css'
import * as actions from '../Shared/actions/index.js';

const masonryOptions = {
  transitionDuration: 0,
  columnWidth: 200,
};

class Grid__container extends Component {
  constructor (props) {
    super(props);
    this.renderChannels = this.renderChannels.bind(this);
  }
  componentDidMount() {
    this.props.getChannels();
  }
  renderChannels(channelList) {
    let sizes = ['lg', 'sm', 'sm', 'md', 'md', 'sm', 'sm','lg', 'sm', 'md', 'sm', 'sm', 'lg', 'md', 'sm', 'sm', 'sm', 'md', 'lg', 'sm', 'sm', 'sm', 'sm', 'md', 'sm', 'md', 'sm', 'sm', 'sm']
    sizes = ['lg', 'md', 'sm', 'sm', 'sm', 'md', 'lg', 'sm', 'sm', 'sm', 'sm', 'md', 'sm', 'md', 'sm', 'sm', 'sm']
    return channelList.map((channel, index) => {
      return (
        <div className={[style.doge, style[sizes[index % sizes.length]]].join(" ")} key={channel.id}>
          <Link to={"channel/" + channel.id}>
            <Tile__component key={channel.id} channelData={channel} />
          </Link>
        </div>
      )
    });
  }
  sizeTile(arg1, arg2, arg3) {
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid__container);