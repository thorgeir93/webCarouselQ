'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import MainTest from './components/MainTest';
import Host from './components/Host';
import NotFoundPage from './components/NotFoundPage';

//import { BrowserHistory } from 'react-router/lib/BrowserHistory'.default;
//var BrowserHistory = require('react-router/lib/browserHistory').default;
import BrowserHistory from 'react-router/lib/browserHistory';

const routes = (
    // the history keyword was to allow
    // the route to go back in the browsing
    // history.
  <Route path="/" component={Layout} history={BrowserHistory}>
    <IndexRoute component={IndexPage}/>
    <Route path="queue/:id" component={MainTest}/>
    <Route path="host" component={Host}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
