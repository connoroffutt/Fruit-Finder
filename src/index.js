import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Game from './Game.js';
import Cards from './Cards.js';
import Timer from './Timer.js';
import Scoreboard from './Scoreboard.js';


ReactDOM.render(
   <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Scoreboard} />
        <Route path="game" component={Game}/>
      </Route>
   </Router>,
  document.getElementById('root')
);
