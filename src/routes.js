import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NamePage from './pages/NamePage';
import ProductsPage from './pages/ProductsPage';
import BarcodePage from './pages/BarcodePage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/name" exact component={NamePage} />
      <Route path="/products" exact component={ProductsPage} />
      <Route path="/barcode" exact component={BarcodePage} />
    </Switch>
  );
}
