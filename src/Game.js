import React, { Component } from 'react';
import Cards from './Cards.js';
import Timer from './Timer.js';


class Game extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Timer StartTimer={this.props.StartTimer} />
                </div>
            </div>
        )
    }

}

export default Game;