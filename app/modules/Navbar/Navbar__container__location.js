import React, {Component} from 'react';
import {connect} from 'react-redux';

class Location__container extends Component {
  constructor (props) {
    super(props);
    this.renderCity = this.renderCity.bind(this);
  }
  renderCity(userData) {
    console.log(userData);
    return userData.map((data, index) => {
      return (
        <div key={index}> {data.city} </div> 
      )
    });
  }
  render() {
    return (
      <ul>
        {this.renderCity(this.props.location)}
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
