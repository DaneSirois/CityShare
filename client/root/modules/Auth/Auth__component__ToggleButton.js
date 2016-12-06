import React, {Component} from 'react';

import style from './Auth__styles.css';

class ToggleButton__component extends Component {
  renderButton (CP_open) {
    if (CP_open) {
      return (
        <div className={style.AuthButton__container__open} onClick={() => this.props.handleClick(this.props.showCP)}>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
      )
    } else {
      return (
        <div className={style.AuthButton__container} onClick={() => this.props.handleClick(this.props.showCP)}>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
      )
    }
  }
  render() {
    return (
      <span className="AuthButton__Wrapper">
        {this.renderButton.bind(this)(this.props.showCP)}
      </span>
    );
  };
};

export default ToggleButton__component;