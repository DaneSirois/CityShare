import React, {Component} from 'react';
import {connect} from 'react-redux';
import style from './Loading__styles.css';
import * as actions from '../Shared/actions/index.js';

class Loading__container extends Component {
  constructor (props) {
    super(props);
    this.state = {  
    }
  }
  render() {
    return (
        <div className="sk-cube-grid">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
    );
  };
};


export default connect(null, null)(Loading__container);
