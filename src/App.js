import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Fruit Finder</h1>
        <Link to='/game'> <button>Play the Game</button></Link>
        <Link to='/'> <button>See High Scores</button></Link>
        {this.props.children}
      </div>
    );
  }
}

export default App;
