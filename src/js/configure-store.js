import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import * as reducers from './shared/reducers';

const sagaMiddleware = createSagaMiddleware()
const reducer = combineReducers(reducers);
const developmentMiddleware = compose(
    applyMiddleware(sagaMiddleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
);
const productionMiddleware = compose(
    applyMiddleware(sagaMiddleware)
);
const middleWare = process.env.NODE_ENV === 'production' ? productionMiddleware : developmentMiddleware;

export function configureStore(initialState) {
    const store = createStore(reducer, initialState, middleWare);

    return store;
}
