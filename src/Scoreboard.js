import React, { Component } from 'react';
import { Link } from 'react-router';


class Scoreboard extends Component {
    render() {
        return (
            <div>
            <Link to='/game'> <button>Play the Game</button></Link>
                <h2>Fastest Times</h2>
                <table className="striped centered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Fastest Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Jesse</td>
                            <td>00:00:16</td>
                        </tr>
                        <tr>
                            <td>Ashley</td>
                            <td>00:00:20</td>
                        </tr>
                        <tr>
                            <td>Bobby</td>
                            <td>00:00:30</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Scoreboard;