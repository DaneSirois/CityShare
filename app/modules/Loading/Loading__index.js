import React, {Component} from 'react';

import LoadingGrid__component from './Loading__component__LoadingGrid.js';
import LoadingText__component from './Loading__component__LoadingText.js';

class Loading__module extends Component {
  render() {
    return (
      <div>
        <LoadingGrid__component />
      </div>
    );
  };
};


export default Loading__module;