import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Fruit Finder</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
