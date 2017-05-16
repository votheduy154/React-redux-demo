import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../containers/App';
import Home from  '../containers/Home';
import User from  '../containers/User';

export default (
    <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="user" component={User}/>
    </Route>
);