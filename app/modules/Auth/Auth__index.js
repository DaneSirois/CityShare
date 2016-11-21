import React, {Component} from 'react';

import ActiveForm__container from './ActiveForm__container.js';

class Auth__module extends Component {
  renderButton () {
    if (loggedIn) {
      return <AuthButton__component data={} />
    } else {
      return <AuthButton__component data={} />
    }
  }
  renderForm () {
    if (showCP && !loggedIn) {
      return <ActiveForm__container />
    }
  }
  render() {
    return (
      <div className={Auth.container}>
        {this.renderButton().bind(this)}
        {this.renderForm().bind(this)}
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

export default Auth__module;
