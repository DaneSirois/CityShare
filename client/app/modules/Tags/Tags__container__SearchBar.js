import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css';

import * as actions from '../Shared/actions/index.js';

class SearchBar__container extends Component {

  constructor(props) {
    super(props)
    this.state = {tag: ''}
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillUnmount(){
    this.props.clearTags();
  }
  handleInputChange(event) {
      this.setState({tag: event.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state.tag);
    this.setState({ tag: '' })
  }
  renderTags(tags) {
    return tags.map((tag) => {
      return(
        <div className={style.tag}>
          {tag}
        </div>
      )
    })
  }
  handleClick(event) {
    console.log(event);
  }

  render() {
    var tags = ['Sports', 'Food', 'Movies', 'Television']
    return (
      <div className={style.searchBar}>
        <div className={style.tag} onClick={this.handleClick.bind(this)}>
          <a>All</a>
        </div>
        {this.renderTags(tags)}
        <div className={style.tag}>
          <form onSubmit={this.handleSubmit.bind(this)}>
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
