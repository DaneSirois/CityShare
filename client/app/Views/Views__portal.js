import React, {Component} from 'react';

import style from './styles/portal.css';
import shared_style from './styles/shared.css';

import Navbar__module from '../modules/Navbar/Navbar_index.js';
import Tags__module from '../modules/Tags/Tags__index.js';
import Portal__module from '../modules/Portal/Portal__index.js';

class Portal__Views extends Component {
  render() {
    return (
      <div>
        <div className={style.container}>
          <div className={shared_style.Navbar__container}>
            <Navbar__module/>
          </div>
          <div className={shared_style.Tags__container}>
            <Tags__module/>
          </div>
          <div className={style.Portal__Container}>
            <Portal__module/>
          </div>
        </div>
      </div>
    );
  };
};

export default Portal__Views;