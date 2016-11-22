import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../Shared/actions/index.js';
import style from './styles/index.css';

class LoadingGrid__component extends Component {
  componentDidMount() {
    this.props.getLocation()
  }

  render() {
    return (

      <div className={style.sk_cube_grid}>
        <div className={[style.sk_cube, style.sk_cube1].join(" ")}></div>
        <div className={[style.sk_cube, style.sk_cube2].join(" ")}></div>
        <div className={[style.sk_cube, style.sk_cube3].join(" ")}></div>
        <div className={[style.sk_cube, style.sk_cube4].join(" ")}></div>
        <div className={[style.sk_cube, style.sk_cube5].join(" ")}></div>
        <div className={[style.sk_cube, style.sk_cube6].join(" ")}></div>
        <div className={[style.sk_cube, style.sk_cube7].join(" ")}></div>
        <div className={[style.sk_cube, style.sk_cube8].join(" ")}></div>
        <div className={[style.sk_cube, style.sk_cube9].join(" ")}></div>
      </div>
    );
  };
};


  const mapDispatchToProps = function (dispatch) {
  return {
    getLocation: () => {

      const request = axios.get("http://ip-api.com/json").then(function(response) {
        dispatch(actions.fetchLocation(response));
      });
    }
  }
}

export default connect(null, mapDispatchToProps)(LoadingGrid__component);
