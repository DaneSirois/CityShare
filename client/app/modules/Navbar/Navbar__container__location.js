import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
class Location__container extends Component {
  constructor (props) {
    super(props);
    this.renderCity = this.renderCity.bind(this);
  }
  renderCity(userData) {
    return userData.map((data, index) => {
      return (
        <div key={index}> {data.city} </div> 
      )
    });
  }
  render() {
    return (
      <ul>
        <Link to={"/"}>
        {this.renderCity(this.props.location)}
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
