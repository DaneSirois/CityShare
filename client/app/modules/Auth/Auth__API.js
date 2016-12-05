// Dependencies:
import {combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

// Import Actions:
import CHANGE_AUTH_TAB from './actions/Auth__action__CHANGE_AUTH_TAB.js';
import SHOW_CP from './actions/Auth__action__SHOW_CP.js';
import LOGIN_USER from './actions/Auth__action__LOGIN_USER.js';
import LOGOUT_USER from './actions/Auth__action__LOGOUT_USER.js';
import SIGNUP_USER from './actions/Auth__action__SIGNUP_USER.js';

// Import Reducers:
import showCP__reducer from './reducers/Auth__reducer__showCP.js';
import activeForm__reducer from './reducers/Auth__reducer__activeForm.js';

// Actions:
export const Auth__actions = {
  callback__CHANGE_AUTH_TAB: function (tab) {
    return (dispatch) => {
      dispatch(CHANGE_AUTH_TAB(tab));
    };
  },
  callback__SHOW_CP: function (bool) {
    return (dispatch) => {
      dispatch(SHOW_CP(bool));
    };
  },
  callback__LOGIN_USER: function (userCreds) {
    return (dispatch) => {
      dispatch(LOGIN_USER(userCreds))
    };
  },
  callback__LOGOUT_USER: function () {
    return (dispatch) => {
      dispatch(LOGOUT_USER());
    };
  },
  callback__SIGNUP_USER: function (userCreds) {
    return (dispatch) => {
      dispatch(SIGNUP_USER(userCreds))
    };
  }
};

const Auth__reducers = combineReducers({
  SHOW_CP: showCP__reducer,
  ACTIVE_FORM: activeForm__reducer
});

export default Auth__reducers;
