import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      rules: false
    }

    this.CardReveal = this.CardReveal.bind(this);
  }

  CardReveal() {
    if (this.state.rules === false) {
      this.setState({
        rules: true
      })
    } else {
      this.setState({
        rules: false
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div onClick={() => { this.CardReveal() }} className="card rules">
          <div className="card-image waves-effect waves-block waves-light">
            <img className={this.state.rules === true ? "imgHide" : "imgReveal"} src="../images/mainfruitcard.jpg" />
          </div>
          <div className="card-content">
            <span className={this.state.rules === true ? "titleHide card-title activator grey-text text-darken-4" : "titleReveal card-title activator grey-text text-darken-4"}>How To Play</span>
          </div>
          <div className={this.state.rules === true ? "cardReveal" : "cardHide"}>
            <ul>
              <span className="card-title grey-text text-darken-4">How To Play</span>
              <li>1. Click any 2 cards to reveal the image beneath. Timer will start on first click.</li>
              <li>2. The goal is to find all the matching pairs. If the 2 cards you click do not match, they will reset.</li>
              <li>3. If the 2 cards do match, the images will change to reflect that. Timer will stop after the final match has been made.</li>
            </ul>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
