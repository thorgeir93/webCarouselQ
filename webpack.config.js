"use strict";
var nodeExternals = require('webpack-node-externals');
const debug = process.env.NODE_ENV !== "production";

// TODO why does debug=false fail ?

//var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var combineLoaders = require("webpack-combine-loaders");
//let extractCSS = new ExtractTextPlugin('./src/static/css/[name].css');

const webpack = require('webpack');
const path = require('path');

/*module.exports = {
  //devtool: debug ? 'inline-sourcemap' : null,
  entry: './src/components/app-client.js',
  //devServer: {
  //  inline: true,
  //  port: 3000,
  //  contentBase: "src/static/",
  //  historyApiFallback: {
  //    index: '/index-static.html'
  //  }
  //},

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
        env: debug ? {} : {
            // only enable it when process.env.NODE_ENV is 'development' or undefined
            "development": {
              "plugins": [["react-transform", {
                "transforms": [{
                  "transform": "react-transform-hmr",
                  // if you use React Native, pass "react-native" instead:
                  "imports": ["react"],
                  // this is important for Webpack HMR:
                  "locals": ["module"]
                }]
                // note: you can put more transforms into array
                // this is just one of them!
              }]]
            }


        }
      },
      exclude: /(node_modules|bower_components)/
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
  //externals: [nodeExternals()]

};
*/

module.exports = {
  entry: './src/components/app-client.js',
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: ['react', 'es2015']
      }
    }]
  },
  plugins: [
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
    })
  ]
};