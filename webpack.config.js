"use strict";
var nodeExternals = require('webpack-node-externals');
const debug = true //process.env.NODE_ENV !== "production";

// TODO why does debug=false fail ?

var ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractCSS = new ExtractTextPlugin('./src/static/css/[name].css');

var combineLoaders = require("webpack-combine-loaders");

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'src', 'app-client.js'),
  devServer: {
    inline: true,
    port: 3333,
    contentBase: "src/static/",
    historyApiFallback: {
      index: '/index-static.html'
    }
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
      }
    },
    {

        test: /\.css$/,
        //test: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract(
            'style-loader',
            combineLoaders([{
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            }])
        )
    }
  ]},
  plugins: debug ? [ 
        new ExtractTextPlugin("css/style.css") 
    ] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),

    new ExtractTextPlugin("css/styles.css")
  ],
  //target: 'node',
  //externals: [nodeExternals()],
};
