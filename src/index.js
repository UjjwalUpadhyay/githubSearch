import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import 'materialize-css/dist/css/materialize.min.css';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';
import { loadRepos } from './actions/reposAction';

let currentValue;
function handleChange() {
	let previousValue = currentValue;
	currentValue = store.getState().repo_type;

	if (previousValue !== currentValue) {
		store.dispatch(loadRepos(store.getState().repo_type));
	}
}

const store = configureStore();
store.dispatch(loadRepos(store.getState().repo_type));
store.subscribe(handleChange);

render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('app')
);
