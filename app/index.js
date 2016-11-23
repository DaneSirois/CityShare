import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import root_reducer from './root_reducer.js';
import { Router, Route, hashHistory } from 'react-router';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import App__module from './modules/App/App__index.js';
import Loading__module from './modules/Loading/Loading__index.js';
import Portal__module from './modules/Portal/Portal__index.js';
import Channel__view from './Views/Views__channel.js';
import * as actions from './modules/Shared/actions/index.js';

// Redux Middleware:
const localStorage_middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATED':
      localStorage.setItem("user_JWT", action.payload.JWT);
      console.log("Inside of the localStorage redux middleware USER_AUTHENTICATED block. Just stored the users JWT in localStorage. Here is the token hash:", action.payload.JWT);
      next(action.payload.loggedIn);
    break
    case 'LOGOUT_USER':
      if (localStorage.user_JWT) {
        localStorage.removeItem("user_JWT");
        console.log("Inside of the localStorage Redux middleware LOGOUT_USER. You will only see this if there was a JWT previously stored inside of localStorage. I just removed it. Here is the updated localStorage object:", localStorage);
      }
      next(action);
    break
    default:
      next(action);
  }
};

const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "socket/");
const store = createStore(root_reducer, applyMiddleware(socketIoMiddleware));

console.log(localStorage, "Checking localstorage");

// Dispatch Initialization action

const user_JWT = localStorage.getItem("user_JWT") || undefined;

setTimeout(() => {
  store.dispatch(actions.InitializeApp(user_JWT));
}, 3000);

ReactDOM.render(
  <Provider store={store}>
    <App__module/>
  </Provider>,
  document.getElementById('SRC')
);