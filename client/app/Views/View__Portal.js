// Import Dependencies:
import React, {Component} from 'react';

import Portal_style from './Style__Portal.css';
import Shared_style from './Style__Shared.css';

import Navbar__module from '../modules/Navbar/Navbar_index.js';
import Tags__module from '../modules/Tags/Tags__index.js';
import Portal__module from '../modules/Portal/Portal__index.js';

// The View:
class Portal__View extends Component {
  render() {
    return (
      <div>
        <div className={Portal_style.container}>
          <div className={Shared_style.Navbar__container}>
            <Navbar__module/>
          </div>
          <div className={Portal_style.Tags__container}>
            <Tags__module/>
          </div>
          <div className={Portal_style.Portal__Container}>
            <Portal__module/>
          </div>
        </div>
      </div>
    );
  };
};

export default Portal__View;