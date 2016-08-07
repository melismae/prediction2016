import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router';
import createLocation from 'history/lib/createHistory';
import axios from 'axios';

import routes from './shared/routes';
import { configureStore } from './configure-store';

const app = express();
app.use(express.static('public'));

app.use((req, res) => {
    const location = createLocation(req.url);
    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }
        if (!renderProps) {
            return res.status(404).end('Not found.');
        }

        function renderView(data) {
            const locals = {
                sources: data,
                selected: 0,
                candidates: {
                    republican: {
                        firstname: 'Donald',
                        lastname: 'Trump'
                    },
                    democrat: {
                        firstname: 'Hillary',
                        lastname: 'Clinton'
                    }
                }
            };
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
                        <title>Predict16</title>
                        <script type="application/javascript">
                            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                        </script>
                        <link rel="stylesheet" href="/main.css" />

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
                // TODO - if there's no data return a response to the client a 400 or 500 or something else
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
                console.log(error)
            });
    });
});
export default app;
