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
import ShowCP__reducer from './reducers/Auth__reducer__ShowCP.js';
import ActiveForm__reducer from './reducers/Auth__reducer__ActiveForm.js';

// Actions:
export const Auth__actions = {
  handle__CHANGE_AUTH_TAB: function (tab) {
    return (dispatch) => {
      dispatch(CHANGE_AUTH_TAB(tab));
    };
  },
  handle__SHOW_CP: function (bool) {
    return (dispatch) => {
      dispatch(SHOW_CP(bool));
    };
  },
  handle__LOGIN_USER: function (userCreds) {
    return (dispatch) => {
      dispatch(LOGIN_USER(userCreds))
    };
  },
  handle__LOGOUT_USER: function () {
    return (dispatch) => {
      dispatch(LOGOUT_USER());
    };
  },
  handle__SIGNUP_USER: function (userCreds) {
    return (dispatch) => {
      dispatch(SIGNUP_USER(userCreds))
    };
  }
};

// Reducers:
const Auth__reducers = combineReducers({
  SHOW_CP: ShowCP__reducer,
  ACTIVE_FORM: ActiveForm__reducer
});

export default Auth__reducers;
