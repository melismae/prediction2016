var webpack = require('webpack');
var path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var outDirectory = (process.env.NODE_ENV === 'production') ? 'public' : 'build';

module.exports = {
  entry: [
    './src/js/client'
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src/js'],
    extensions: ['', '.js', '.jsx', '.scss']
  },
  output: {
    path: path.join(__dirname, outDirectory),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
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
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
};
