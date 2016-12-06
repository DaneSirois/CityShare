import {App__actions} from './modules/App/App__API.js';
import {Auth__actions} from './modules/Auth/Auth__API.js';

const AC = Object.assign({}, 
  App__actions,
  Auth__actions
);

export default AC;