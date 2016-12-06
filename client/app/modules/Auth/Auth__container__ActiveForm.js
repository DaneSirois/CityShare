import React, {Component} from 'react';
import {connect} from 'react-redux';

import AC from '../../Action_controller.js';
import style from './Auth__styles.css';

import LoginForm__container from './Auth__container__LoginForm.js';
import SignupForm__container from './Auth__container__SignupForm.js';

class ActiveForm__container extends Component {
  constructor (props) {
    super(props);
  }
  renderTabsList (tab) {
    if (tab === "signupForm") {
      return (
        <ul className={style.tab_list}>
          <li className={[style.form_tab, style.border_right].join(" ")} onClick={() => this.props.changeTab.bind(this)("loginForm")} >Login</li>
          <li className={[style.form_tab, style.form_tab_selected].join(" ")} onClick={() => this.props.changeTab.bind(this)("signupForm")} >Signup</li>
        </ul>
      )
    } else {
      return (
        <ul className={style.tab_list}>
          <li className={[style.form_tab, style.form_tab_selected].join(" ")} onClick={() => this.props.changeTab.bind(this)("loginForm")} >Login</li>
          <li className={[style.form_tab, style.border_left].join(" ")} onClick={() => this.props.changeTab.bind(this)("signupForm")} >Signup</li>
        </ul>
      )
    }
  }
  renderForm (form) {
    if (form === "signupForm") {
      return (
        <SignupForm__container />
      )
    } else {
      return (
        <LoginForm__container />
      )
    }
  }
  render() {
    return (
      <div className={style.CP__container}>
        <header className={style.CP__header}>
          {this.renderTabsList(this.props.ACTIVE_FORM)}
        </header>
        {this.renderForm(this.props.ACTIVE_FORM)}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    ACTIVE_FORM: state.Auth.ACTIVE_FORM
  });
};

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (tab) => {
      dispatch(AC.request__CHANGE_AUTH_TAB(tab));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveForm__container);

