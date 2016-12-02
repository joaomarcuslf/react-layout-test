/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './Components/App.jsx';
import AppContainer from './Components/AppContainer/AppContainer.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={AppContainer} />
    </Route>
  </Router>,
  document.getElementById('appContainer')
);
