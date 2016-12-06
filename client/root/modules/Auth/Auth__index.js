import React, {Component} from 'react';
import {connect} from 'react-redux';

import AC from '../../action_controller.js';
import style from './Auth__styles.css';

import ActiveForm__container from './Auth__container__ActiveForm.js';
import ToggleButton__component from './Auth__component__ToggleButton.js';
import LogoutButton__component from './Auth__component__LogoutButton.js';

class Auth__module extends Component {
  renderButton () {
    if (this.props.loggedIn) {
      return <LogoutButton__component handleClick={() => this.props.logout.bind(this)} />
    } else {
      return <ToggleButton__component handleClick={() => this.props.handleClick.bind(this)(this.props.SHOW_CP)} showCP={this.props.SHOW_CP} />
    }
  }
  renderForm () {
    if (this.props.SHOW_CP && !this.props.loggedIn) {
      return <ActiveForm__container />
    }
  }
  render() {
    return (
      <div className={style.Auth__container}>
        {this.renderButton()}
        {this.renderForm()}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    loggedIn: state.User.loggedIn,
    SHOW_CP: state.Auth.SHOW_CP
  });
};

function mapDispatchToProps(dispatch) {
  return {
    handleClick: (SHOW_CP) => {
      if (SHOW_CP === false) {
        dispatch(AC.handle__SHOW_CP(true));  
      } else {
        dispatch(AC.handle__SHOW_CP(false));
      }
    },
    logout: () => {
      dispatch(AC.handle__LOGOUT_USER());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth__module);
