import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createHistory';
import axios from 'axios';

import routes from './shared/routes';
import { configureStore } from './configure-store';
import { makeLocals } from './initial-state';

const app = express();
app.use(express.static('public'));

app.use((req, res) => {
    const location = createLocation(req.url);

    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            return res.status(500).end('Internal server error');
        }
        if (!renderProps) {
            return res.status(404).end('Not found.');
        }
        function renderView(data) {
            const locals = makeLocals(data);
            const store = configureStore(locals);
            const InitialComponent = (
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
            const initialState = store.getState();
            const componentHTML = renderToString(InitialComponent);

            const HTML = `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <meta name="description" content="">
                        <meta name="keywords" content="">
                        <meta name="author" content="">

                        <meta property="og:image" content="http://predict16.com/predict16.jpg">
                        <meta property='og:title' content='Melissa Smith'/>
                        <meta property='og:description' content="" />
                        <meta property='og:url' content='http://predict16.com' />
                        <meta property="og:image:type" content="image/jpeg">
                        <meta property="og:image:width" content="800">
                        <meta property="og:image:height" content="533">
                        <title>Predict16</title>
                        <script type="application/javascript">
                            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                        </script>
                        <link rel="stylesheet" href="/main.css" />
                        <link rel="shortcut icon" type="image/png" href='http://predict16.com/favicon.png'/>
                        <link rel="shortcut icon" type="image/png" href='./favicon.png'/>

                    </head>
                    <body>
                        <div id="app">${componentHTML}</div>
                        <script type="application/javascript" src="/bundle.js"></script>
                    </body>
                </html>
                `;
            return HTML;
        }

        // axios get call to the api
        axios.get('http://api.predict16.com/api/v1/predictions')
            .then(response => {
                let data = response.data;
                if (!data) {
                    return;
                }
                return data;
            })
            .then(data => renderView(data))
            .then(html => {
                res.end(html)
            })
            .catch(error => {
                let data = [];
                renderView(data);
            });
    });
});
export default app;
