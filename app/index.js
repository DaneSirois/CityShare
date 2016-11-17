import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

//require("./styles/index.scss");

//const socket = io('http://localhost:3001');

//const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

// Imports:
import root_reducer from './root_reducer.js';
import App__index from './modules/App/App__index.js';

ReactDOM.render(
  <Provider store={createStore(root_reducer)}>
    <App__module />
  </Provider>,
  document.getElementById('SRC')
);