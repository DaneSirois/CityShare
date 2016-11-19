import { NEW_UPDATE } from '../actions/index.js';

export default function(state = [], action) {
  switch(action.type) {
    case NEW_UPDATE:
      let update = {
        id: action.payload.id,
        content: action.payload.content,
      }
      return [...state, update];
  }
  return state;
}