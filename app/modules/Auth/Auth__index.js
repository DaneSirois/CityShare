import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from '../Shared/actions/index.js';

import ActiveForm__container from './Auth__container__ActiveForm.js';
import AuthButton__component from './Auth__component__AuthButton.js';

class Auth__module extends Component {
  renderButton () {
    if (this.props.loggedIn) {
      return <AuthButton__component whenClicked={() => this.props.handleClick} />
    } else {
      return <AuthButton__component handleClick={this.props.handleClick.bind(this)} showCP={this.props.showCP} />
    }
  }
  renderForm () {
    if (this.props.showCP && !this.props.loggedIn) {
      return <ActiveForm__container />
    }
  }
  render() {
    return (
      <div>
        {this.renderButton()}
        {this.renderForm()}
      </div>
    );
  };
};

function mapStateToProps(state) {
  return ({
    loggedIn: state.User.loggedIn,
    showCP: state.Auth.showCP
  });
};

const mapDispatchToProps = function (dispatch) {
  return {
    handleClick: (showCP) => {
      if (showCP === false) {
        dispatch(actions.showCP(true));  
      } else {
        dispatch(actions.showCP(false));
      }
      
    }
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(Auth__module);
