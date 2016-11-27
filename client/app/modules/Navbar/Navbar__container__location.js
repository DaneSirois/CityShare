import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';

import style from './styles/index.css';

class Location__container extends Component {
  render() {
    return (
      <Link to={"/"}>
        <h1 className={style.location_text}>{this.props.location}</h1>
      </Link>
    );
  };
};

function mapStateToProps(state) {
  return ({
    location: state.Loading.location
  });
};

export default connect(mapStateToProps, null)(Location__container);