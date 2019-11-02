import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Search from './pages/Search';
import Detail from './pages/Detail';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/detail" component={Detail} />
        </Switch>
    </BrowserRouter>
);

export default Routes;