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
    return userData.map((data, index) => {
      return (
        <h1 className={style.location_text} key={index}>{data.city}</h1> 
      )
    });
  }
  render() {
    return (
      {this.renderCity(this.props.location)}

    );
  };
};

function mapStateToProps(state) {
  return ({
    location: state.Loading.location
  });
};

export default connect(mapStateToProps, null)(Location__container);