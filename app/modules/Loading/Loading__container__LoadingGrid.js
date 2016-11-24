import React, {Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import * as actions from '../Shared/actions/index.js';
import style from './styles/index.css';
import { Link } from 'react-router';

class LoadingGrid__component extends Component {
  render() {
    return (
      <div className={style.body}>
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
      </div>
    );
  };
};

export default LoadingGrid__component;