import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Cards from './Cards.js';
import Scoreboard from './Scoreboard.js';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Scoreboard} />
      <Route path="game" component={Cards} />
    </Route>
  </Router>,
  document.getElementById('root')
);
