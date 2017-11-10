'use strict';

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
import api from './data/api';
//var bodyParser = require('body-parser')
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import apiRoutes from '../apiRoutes'
import cors from 'cors';

import passport from 'passport';
import spotifyPassport from 'passport-spotify';
const SpotifyStrategy = spotifyPassport.Strategy;
passport.use(new SpotifyStrategy({
    clientID: process.env.client_id,
    clientSecret: process.env.client_secret,
    callbackURL: process.env.redirect_uri
  },
  function(accessToken, refreshToken, profile, done) {
    profile.accessToken = accessToken;
    return done(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Origin');
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
}

app.use(passport.initialize());
app.use(passport.session());

app.use(allowCrossDomain);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors());

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.use(cookieParser('kagafhjheyboard casdfat'));

dotenv.config()

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(session({
  store: new MongoStore({
    db: process.env.mongodb,
    host: process.env.mongohost,
    port: process.env.mongoport,
    url: process.env.mongourl
  })
}));

//
// Middleware
//

apiRoutes(app);

// universal routing and rendering
app.get('*', (req, res) => {
  console.log( 'Request url man:' + req.url )
  console.log( 'Available routes:' )
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
    
      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
