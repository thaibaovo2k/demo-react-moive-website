import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Detail from '../pages/details/Detail';


const Routes = () => {
  return (
    <Switch>
        <Route
            path='/:category/search/:keyword'
            component={Catalog}
        />
        <Route
            path='/:category/:id'
            component={Detail}
        />
        <Route
            path='/:category'
            component={Catalog}
        />
        <Route
            path='/'
            exact
            element={<Home/>}
        />
    </Switch>
  );
}

export default Routes;