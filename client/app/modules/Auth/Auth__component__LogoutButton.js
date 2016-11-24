import React, {Component} from 'react';

import style from './styles/index.css';

class LogoutButton__component extends Component {
  render() {
    return (
      <div className={style.AuthButton_container} onClick={() => this.props.handleClick()}>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
      </div>
    );
  };
};


export default LogoutButton__component;