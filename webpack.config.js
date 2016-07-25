const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const plugins = [
  new ExtractTextPlugin('[name].css'),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  })
];

module.exports = {
    env: process.env.NODE_ENV,
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src/js/client'
    ],
    resolve: {
        modulesDirectories: ['node_modules', 'src/js'],
        extensions: ['', '.js', '.jsx', '.scss']
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test:    /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?outputStyle=expanded')
            },
            // Inline base64 URLs for <=8k images, direct URLs for the rest
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader?limit=8192'
            }
        ],
    },
    plugins: plugins,
    postcss: [
        autoprefixer({
          browsers: ['last 2 versions']
        })
    ],
    devtool: 'inline-source-map',
    devServer: {
    hot: true,
    proxy: {
      '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
    },
    host: '127.0.0.1'
  }
};
