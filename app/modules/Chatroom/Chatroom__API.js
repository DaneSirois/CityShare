// Import Dependencies:
import React, {Component} from 'react';
import {combineReducers} from 'redux';
import {connect} from 'react-redux';

import styles from './Chatroom__styles.css';
import * as actions from './actions/index.js';
import * as reducers from './reducers/index.js';

import {Chatroom__container__messageList as messageList} from './Chatroom__container__messageList.js';


// Actions:


// Reducers:
export const Chatroom__reducers = combineReducers({
  chatLog: reducers.chatLog__reducer
});

// Root Component:
export class Chatroom__module extends Component {
  render() {
    return (
      <div className={styles.Chatroom__container}>
        <messageList />
      </div>
    );
  };
};

export const Chatroom__actions = (dispatch) => ({
  newMessage: (username, message) => dispatch(actions.newMessage__action(username, message))
});

connect(Chatroom__actions)(Chatroom__module);

