import { SET_USERNAME } from '../actions/index.js';

export default function (state = 'Anonymous', action) {
  switch(action.type) {
    case SET_USERNAME:
      return action.payload;
  }
  return state;
}