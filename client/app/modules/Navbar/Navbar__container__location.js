import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import style from './styles/index.css';

class Location__container extends Component {
  constructor (props) {
    super(props);
    this.renderCity = this.renderCity.bind(this);
  }
  renderCity(userData) {
    let formattedChannelName;
    if (this.props.channelName) {
      formattedChannelName = " > " + this.props.channelName;
    }
    return userData.map((data, index) => {
      return (
        <h1 className={style.location_text}>{data.city}{formattedChannelName}</h1> 
      )
    });
  }
  render() {
    return (
      <div>
        <Link to={"/"}>
          {this.renderCity(this.props.location)}
        </Link>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    location: state.Loading.location,
    channelName: state.Channel.channelName
  });
};

export default connect(mapStateToProps, null)(Location__container);