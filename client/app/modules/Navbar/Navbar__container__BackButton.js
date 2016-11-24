import React, {Component} from 'react';

import style from './styles/index.css';

class BackButton__container extends Component {
  render() {
    return (
      <div className={style.BackButton__container}>
        <i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i>
      </div>
    );
  };
};

export default BackButton__container;