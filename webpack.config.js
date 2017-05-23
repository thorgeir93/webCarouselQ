"use strict";
var nodeExternals = require('webpack-node-externals');
const debug = true //process.env.NODE_ENV !== "production";

// TODO why does debug=false fail ?

//var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var combineLoaders = require("webpack-combine-loaders");
//let extractCSS = new ExtractTextPlugin('./src/static/css/[name].css');

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
	    loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
	},
    {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        loader: "file-loader?name=/static/images/[name].[ext]"
    },
  ]},

  plugins: debug ? [] : [
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
  ],
  //target: 'node',
  //externals: [nodeExternals()],
};
