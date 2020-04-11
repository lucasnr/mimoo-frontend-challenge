import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import HomePage from '../pages/HomePage';
import NamePage from '../pages/NamePage';
import ProductsPage from '../pages/ProductsPage';
import BarcodePage from '../pages/BarcodePage';
import IdentifiedProductPage from '../pages/IdentifiedProductPage';

export default function Routes() {
	return (
		<Switch>
			<PublicRoute path="/" exact component={HomePage} />
			<PublicRoute path="/name" exact component={NamePage} />

			<PrivateRoute path="/products" exact component={ProductsPage} />
			<PrivateRoute path="/barcode" exact component={BarcodePage} />
			<PrivateRoute
				path="/identified-product"
				exact
				component={IdentifiedProductPage}
			/>
		</Switch>
	);
}
