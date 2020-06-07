import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes/routes';

const home: () => JSX.Element = () => <h1>Change me in scenes/App/Routes/Routes</h1>;

const Routes = () => (
	<Switch>
		<Route path={routes.HOME} component={home} exact />
	</Switch>
);

export default Routes;
