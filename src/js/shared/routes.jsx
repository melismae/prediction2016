import React     from 'react';
import { Route } from 'react-router';
import App from './components';
import SubComponent from './components/Subcomponent';

export default (
    <Route component={App} path="/">
        <Route component={SubComponent} path="/todos" />
    </Route>
);
