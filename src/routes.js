'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
//import Player_layout from './components/Player_layout';
import IndexPage from './components/IndexPage';
import MainTest from './components/MainTest';
import Host from './components/Host';
import Player from './components/Player';
import NotFoundPage from './components/NotFoundPage';

//import { BrowserHistory } from 'react-router/lib/BrowserHistory'.default;
//var BrowserHistory = require('react-router/lib/browserHistory').default;
import BrowserHistory from 'react-router/lib/browserHistory';

const routes = (
    // the history keyword was to allow
    // the route to go back in the browsing
    // history.
    //
    <div>
        <Route path="/" component={Layout} history={BrowserHistory}>
            <IndexRoute component={IndexPage}/>
            <Route path="queue/:id" component={MainTest}/>
            <Route path="host" component={Host}/>
            <Route path="player" component={Player}/>
            <Route path="*" component={NotFoundPage}/>
        </Route>
    </div>
);

        //<Route exact={true} path="/player" component={Player_layout}/>
            //<Route path="/player" component={Player}/>
export default routes;
