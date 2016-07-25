'use strict';

require('babel-register')({
    presets: ['es2015', 'react']
});

var server = require('./src/js/server');
var isProduction = process.env.NODE_ENV === 'production';
const PORT = isProduction ? process.env.PORT : 3000;

server.default.listen(PORT, function () {
    console.log('Server listening on ', PORT);
});
