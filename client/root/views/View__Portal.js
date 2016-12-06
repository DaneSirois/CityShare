// Import Dependencies:
import React, {Component} from 'react';

import Portal_style from './View__Portal__style.css';
import Shared_style from './Style__Shared.css';

// Import Partials / Modules:
import Navbar__partial from '../partials/Partial__navbar.js';
import Tags__module from '../modules/Tags/Tags__index.js';
import Portal__module from '../modules/Portal/Portal__index.js';

// The View:
class Portal__View extends Component {
  render() {
    return (
      <div>
        <div className={Portal_style.container}>
          <Navbar__partial />
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