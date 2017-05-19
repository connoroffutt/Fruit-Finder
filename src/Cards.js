import React, { Component } from 'react';
import Timer from './Timer.js';
import App from './App.js';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import './Cards.css';

const cards = [
    { img: '../images/apple.gif', id: 0 },
    { img: '../images/banana.gif', id: 1 },
    { img: '../images/cherries.gif', id: 2 },
    { img: '../images/dragonfruit.png', id: 3 },
    { img: '../images/grapes.png', id: 4 },
    { img: '../images/lemon.png', id: 5 },
    { img: '../images/lime.gif', id: 6 },
    { img: '../images/orange.jpg', id: 7 },
    { img: '../images/strawberry.png', id: 8 },
    { img: '../images/watermelon.png', id: 9 },
    { img: '../images/apple.gif', id: 10 },
    { img: '../images/banana.gif', id: 11 },
    { img: '../images/cherries.gif', id: 12 },
    { img: '../images/dragonfruit.png', id: 13 },
    { img: '../images/grapes.png', id: 14 },
    { img: '../images/lemon.png', id: 15 },
    { img: '../images/lime.gif', id: 16 },
    { img: '../images/orange.jpg', id: 17 },
    { img: '../images/strawberry.png', id: 18 },
    { img: '../images/watermelon.png', id: 19 }
]


class Cards extends Component {

    constructor() {
        super();
        this.state = {
            clicks: 0,
            elem1: "",
            matches: 0
        }
        this.Click = this.Click.bind(this);
        this.CheckMatch = this.CheckMatch.bind(this);
        this.ShowMatch = this.ShowMatch.bind(this);
        this.FirstClick = this.FirstClick.bind(this);
    }


    CheckMatch(elem) {
        if (this.state.elem1.img === elem.img) {
            console.log('Match found!');
            this.ShowMatch(elem);

        } else {
            console.log('no match')
        };
    }


    Click(elem) {
        if (this.state.clicks === 1) {
            this.setState({
                elem1: elem,
                clicks: this.state.clicks + 1
            });
        } else if (this.state.clicks === 2) {
            this.CheckMatch(elem);
            this.setState({
                clicks: 1
            });
        }
    }

    FirstClick(elem) {
        if(this.state.clicks === 0){
            this.setState({
                clicks: 1
            });
            console.log(this.props);
            this.props.StartTimer;
            
            this.Click(elem);
            // console.log(this.state.clicks)
        } else {
            this.Click(elem);
        }
    }

    ShowMatch(elem) {
        cards.splice(elem.id, 1, { img: '../images/vegcheckmark.jpg' });
        cards.splice(this.state.elem1.id, 1, { img: '../images/vegcheckmark.jpg' });
        this.setState({
            matches: this.state.matches + 1
        })
    }

    render() {
        let cardsJSX = cards.map((elem, i) => {
            return (
                <div className="col s3" key={i}>
                    <div className="card">
                        <div className="card-image">
                            <img onClick={() => {
                                this.FirstClick(elem);

                            }} src={elem.img} className="cardDisplay" />
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="row">
                {cardsJSX}
            </div>
        )
    }
}

export default Cards;
