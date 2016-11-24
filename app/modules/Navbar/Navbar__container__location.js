import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
class Location__container extends Component {
  render() {
    return (
      <ul>
        <Link to={"/"}>
        {this.props.location}
        </Link>
      </ul>
    );
  };
};

function mapStateToProps(state) {
  return ({
    location: state.Loading.location
  });
};

export default connect(mapStateToProps, null)(Location__container);
