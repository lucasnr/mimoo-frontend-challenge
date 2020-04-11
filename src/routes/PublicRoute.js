import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute(props) {
	const user = useSelector((state) => state.user);

	return user !== null ? <Redirect to="/products" /> : <Route {...props} />;
}
