import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/login/Login';
import Main from './pages/main/Main';

export default function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact component={Login} />
			<Route path="/dev" component={Main} />
		</BrowserRouter>
	);
}
