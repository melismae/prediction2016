import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../shared/routes';
import { configureStore } from '../configure-store';
import '../../css/master.scss';

let initialState = window.__INITIAL_STATE__;

const store = configureStore(initialState);

render (
    <Provider store={store}>
        <Router children={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('app')
);
