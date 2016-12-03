/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './Components/App.jsx';
import Container from './Components/Container/Container.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Container} />
    </Route>
  </Router>,
  document.getElementById('appContainer')
);
