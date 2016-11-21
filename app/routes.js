import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App__module from './modules/App/App__index.js';
import Portal__module from './modules/Portal/Portal__index.js';
import Channel__view from './Views/Views__channel.js';

export default (
<Route path="app/" component={Portal__module}>
	<Route path="channel/:id/" component={Channel__view} />
</Route>
);