import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const socketIoMiddleware = createSocketIoMiddleware(socket, "socket/");

// Imports:
import root_reducer from './reducers/root_reducer.js';
import App from './App.js';

ReactDOM.render(
  <Provider store={createStore(root_reducer, applyMiddleware(socketIoMiddleware))}>
    <App />
  </Provider>,
  document.getElementById('SRC')
);