import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyle';
import Routes from './routes';

import store from './store';

export default function App() {
	return (
		<Provider store={store}>
			<GlobalStyle />

			<Router>
				<Routes />
			</Router>
		</Provider>
	);
}
