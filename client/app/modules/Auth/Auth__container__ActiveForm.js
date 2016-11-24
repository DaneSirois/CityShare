import React, {Component} from 'react';
import {connect} from 'react-redux';

import style from './styles/index.css';

import * as actions from '../Shared/actions/index.js';

import LoginForm__container from './Auth__container__LoginForm.js';
import SignupForm__container from './Auth__container__SignupForm.js';

class ActiveForm__container extends Component {
  renderTabsList (tab) {
    if (tab === "signupForm") {
      return (
        <ul className={style.tab_list}>
          <li className={style.form_tab} onClick={() => this.props.changeTab("loginForm")} >Login</li>
          <li className={[style.form_tab, style.form_tab_selected].join(" ")} onClick={() => this.props.changeTab("signupForm")} >Signup</li>
        </ul>
      )
    } else {
      return (
        <ul className={style.tab_list}>
          <li className={[style.form_tab, style.form_tab_selected].join(" ")} onClick={() => this.props.changeTab("loginForm")} >Login</li>
          <li className={style.form_tab} onClick={() => this.props.changeTab("signupForm")} >Signup</li>
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
      <div className={style.CP_container}>
        <header>
          {this.renderTabsList(this.props.activeForm)}
        </header>
        {this.renderForm(this.props.activeForm)}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    activeForm: state.Auth.activeForm
  });
};

const mapDispatchToProps = function (dispatch) {
  return {
    changeTab: (tab) => {
      
      dispatch(actions.changeAuthTab(tab));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveForm__container);

