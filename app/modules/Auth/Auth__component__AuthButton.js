import React, {Component} from 'react';

import style from './styles/index.css';

class AuthButton__component extends Component {
  render() {
    return (
      <div className={style.AuthButton_container} onClick={() => this.props.handleClick(this.props.showCP)}>
        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
      </div>
    );
  };
};


export default AuthButton__component;