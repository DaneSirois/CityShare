import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import Headline__container from './Feed__container__Headline.js';

class HeadlineList__container extends Component {
  constructor (props) {
    super(props);
    this.state = {headline: ''}
    this.renderHeadlines = this.renderHeadlines.bind(this);
  }

  handleInputChange(event) {
    this.setState({headline: event.target.value});
  }

  renderHeadlines(headlinesList) {
    if (headlinesList.length) {
      return headlinesList.map((headline, i) => {
        if (Number(headline.channel_id) === Number(this.props.channel_id)) {
          let isActive = i === 0 ? true : false;
          return (
            <Headline__container 
            key={headline.id} 
            channel_id={this.props.channel_id} 
            headlineData={ 
              {
                title: headline.name, 
                created_at: headline.created_at, 
                headline_id: headline.id, 
                isActive: isActive
              } 
            }/>
          )
        }
      });
    } else {
      return(
        <form onSubmit={this.props.handleSubmit(this.state.headline, this.props.channel_id)} >
          <h2>Enter Headline</h2>
          <input onChange={this.handleInputChange.bind(this)} type="text" placeholder="Next headline:" />
        </form>
      )
    }
  }

  render() {
    return (
      <ul>
        {this.renderHeadlines.bind(this)(this.props.headlines)}
      </ul>
    );
  };
};

function mapStateToProps(state) {
  return ({
    headlines: state.Feed.headlines
  });
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleSubmit: (headlineTitle, channel_id) => (event) => {
      event.preventDefault();
      let headline = {
        title: headlineTitle,
        channel_id: channel_id
      }
      dispatch(actions.HEADLINE_NEW(headline));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadlineList__container);
