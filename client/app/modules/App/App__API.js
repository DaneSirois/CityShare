// Dependencies:
import {combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

// Import Actions:
import INITIALIZE_APP from './actions/App__action__INITIALIZE_APP.js';
import RENDER_APP from './actions/App__action__RENDER_APP.js';

// Import Reducers:
import RenderApp__reducer from './reducers/App__reducer__RenderApp.js';

// Actions:
export const App__actions = {
  handle__INITIALIZE_APP: function (user_JWT) {
    return (dispatch) => {
      dispatch(INITIALIZE_APP(user_JWT));
    };
  },
  handle__RENDER_APP: function (bool) {
    return (dispatch) => {
      dispatch(RENDER_APP(bool));
    }
  }
};

// Reducers:
const App__reducers = combineReducers({
  RENDER_APP: RenderApp__reducer
});

export default App__reducers;
