import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NamePage from './pages/NamePage';
import ProductsPage from './pages/ProductsPage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/name" exact component={NamePage} />
      <Route path="/products" exact component={ProductsPage} />
    </Switch>
  );
}
