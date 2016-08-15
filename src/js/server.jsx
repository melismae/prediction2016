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
                        <meta name="description" content="Serious and irreverent prediction data for the US Presidential Election, all in one place.">
                        <meta name="keywords" content="American election prediction, Trump Prediction, Clinton Prediction, Predict US election, predict election, election prediction, who will win the US election, who will be president, President Clinton, President Trump, 538 prediction">
                        <meta name="author" content="@melismae & @marciaga">

                        <meta property="og:image" content="http://predict16.com/predict16.jpg">
                        <meta property='og:title' content='Predict16'/>
                        <meta property="og:description" content="Serious and irreverent prediction data for the US Presidential Election, all in one place." />
                        <meta property='og:url' content='http://predict16.com' />
                        <meta property="og:image:type" content="image/jpeg">
                        <meta property="og:image:width" content="800">
                        <meta property="og:image:height" content="533">
                        <title>Predict16</title>
                        <script type="application/javascript">
                            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
                        </script>
                        <script>
                          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

                          ga('create', 'UA-82474028-1', 'auto');
                          ga('send', 'pageview');

                        </script>
                        <link rel="stylesheet" href="/main.css" />
                        <link rel="shortcut icon" type="image/png" href='http://predict16.com/favicon.png'/>
                        <link rel="shortcut icon" type="image/png" href='favicon.png'/>

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
