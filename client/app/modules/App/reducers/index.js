import {combineReducers} from 'redux';

import RenderApp__reducer from './App__reducer__RenderApp.js'

const App__reducers = combineReducers({
  RenderApp: RenderApp__reducer
});

export default App__reducers;