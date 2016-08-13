import React     from 'react';
import { Route, Redirect } from 'react-router';
import App from './components';

export default (
    <Route component={App} path="/">
        <Redirect from="*" to="/" />
    </Route>
);
