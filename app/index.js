import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import root_reducer from './root_reducer.js';
import App__module from './modules/App/App__index.js';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

import actions from './modules/Shared/actions/index.js';

const socket = io('http://localhost:3000');
const socketIoMiddleware = createSocketIoMiddleware(socket, "socket/");

const store = createStore(root_reducer, applyMiddleware(socketIoMiddleware));

// Dispatch Initialization action
//store.dispatch(actions.fetchState);

ReactDOM.render(
  <Provider store={store}>
    <App__module />
  </Provider>,
  document.getElementById('SRC')
);