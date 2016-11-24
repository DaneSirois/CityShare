
import React, {Component} from 'react';

import style from './styles/portal.css';
import Navbar__module from '../modules/Navbar/Navbar_index.js';
import Portal__module from '../modules/Portal/Portal__index.js'
class Portal__Views extends Component {
  render() {
    return (
      <div>
        <div className={style.container}>
          <div className={style.Portal__Container}>
          <Portal__module/>
          </div>
        </div>
      </div>
    );
  };
};

export default Portal__Views;
