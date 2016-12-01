import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css';

import * as actions from '../Shared/actions/index.js';

class SearchBar__container extends Component {

  constructor(props) {
    super(props)
    this.state = {tag: ''}
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillUnmount(){
    this.props.clearTags();
  }
  handleInputChange(event) {
      this.setState({tag: event.target.value});
  }
  handleSubmit(tag) {
    e.preventDefault();
    console.log(tag);
    this.props.handleSubmit(tag);
    this.setState({ tag: '' })
  }
  renderTags(tags) {
    return tags.map((tag) => {
      return(
        <div className={style.tag} onClick={(e) => this.props.handleSubmit(tag)}>
          <a>{tag}</a>
        </div>
      )
    })
  }
  handleClick(event) {
    this.props.handleSubmit
  }

  render() {
    var tags = ['Tech', 'News', 'Sports', 'Foodies', 'Movies', 'Television', 'Music', 'Nightlife', 'Gaming', 'Books', 'Anime', 'Fashion', 'Mountaineering', 'Random' ]
    return (
      <div className={style.searchBar}>
        <div className={style.tag} onClick={(e) => this.props.clearTags()}>
          All
        </div>
        {this.renderTags(tags)}
        <div className={style.tag}>
        <form className={style.searchInput} onSubmit={this.handleSubmit.bind(this)}>
          <input className={style.searchInput} placeholder="Filter by Tag" onChange={this.handleInputChange.bind(this)} value={this.state.tag} type="text" />
        </form>
        </div>
      </div>
    );
  };
};


const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (tag) => {
      dispatch(actions.filterChannels(tag))
    },
    clearTags: () => {
      dispatch(actions.clearTags());
    }
  }
};

export default connect(null, mapDispatchToProps)(SearchBar__container);
