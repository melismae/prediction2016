# PREDICTION2016

#### To run in dev mode
```
$ npm run dev
```

This runs the node server on port 3000, watched by nodemon, followed by the Webpack Dev Server on port 8080.

Each of those process is available as its own command, respectively: `$ npm run dev-server` and `$ npm run server`
#### Production build
```
$ npm run build
```
Builds the static assets.
#### Production server
```
$ npm run start
```
Starts the node server on port 8008.

For security reasons, the `.env` file is not included. You'll need to obtain the credentials listed in the `example.env`.
