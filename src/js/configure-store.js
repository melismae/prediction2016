import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as reducers from './shared/reducers';
const reducer = combineReducers(reducers);
const devMiddleware = typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f;

export function configureStore(initialState) {
    let store = createStore(reducer, initialState);
    if (process.env.NODE_ENV !== 'production') {
        store = createStore(reducer, initialState, devMiddleware);
    }

    return store;
}
