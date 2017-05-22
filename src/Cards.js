import React, { Component } from 'react';
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
            matches: 0,
            seconds: 0,
            minutes: 0,
            hours: 0,
            t: 0
        }
        this.Click = this.Click.bind(this);
        this.CheckMatch = this.CheckMatch.bind(this);
        this.ShowMatch = this.ShowMatch.bind(this);
        this.FirstClick = this.FirstClick.bind(this);
        this.StartTimer = this.StartTimer.bind(this);
        this.CountTime = this.CountTime.bind(this);
        this.GameShouldEnd = this.GameShouldEnd.bind(this);
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
        if (this.state.clicks <= 1) {
            this.setState({
                elem1: elem,
                clicks: 2
            });
            console.log(this.state.clicks)
        } else if (this.state.clicks === 2) {
            this.CheckMatch(elem);
            this.setState({
                clicks: 1
            });
         console.log(this.state.clicks)   
        }
    }

    FirstClick(elem) {
        if (this.state.clicks === 0) {
            this.StartTimer();
            this.Click(elem);
        } else {
            this.Click(elem);
        }
    }

    ShowMatch(elem) {
        cards.splice(elem.id, 1, { img: '../images/checkmark.jpg' });
        cards.splice(this.state.elem1.id, 1, { img: '../images/checkmark.jpg' });
        this.setState({
            matches: this.state.matches + 1
        });
        this.GameShouldEnd();
    }

    GameShouldEnd(){
        if(this.state.matches === 9){
            this.StopTimer();
            alert("You finished the game!");
        }
    }

    //Timer Functions Below
    CountTime() {
        this.setState({
            seconds: this.state.seconds + 1
        });

        if (this.state.seconds >= 60) {
            this.setState({
                seconds: 0,
                minutes: this.state.minutes + 1
            });
            if (this.state.minutes >= 60) {
                this.setState({
                    minutes: 0,
                    hours: this.state.hours + 1
                });
            }
        }
        this.StartTimer();
    }

    StartTimer() {
        this.setState({
            t: setTimeout(() => { this.CountTime() }, 1000)
        })
    }

    StopTimer() {
        clearTimeout(this.state.t);
    }

    ClearTimer() {
        clearTimeout(this.state.t);
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0,
            t: 0
        })
    }
    //Timer Functions Above

    render() {
        let cardsJSX = cards.map((elem, i) => {
            return (
                <div className="col s3" key={i}>
                    <div className="card">
                        <div className="card-image">
                            <img onClick={() => {this.FirstClick(elem);}} 
                            src="../images/bowloffruit.png" 
                            className="cardBackStart" 
                            alt="backofcard"/>
                            <img src={elem.img} 
                            className="cardDisplay" 
                            alt="fruitcard" />
                        </div>
                    </div>
                </div>

            )
        })
        return (
            <div className="container">
                <div>
                    <button onClick={() => { this.StartTimer() }}>START</button>
                    <button onClick={() => { this.StopTimer() }}>STOP</button>
                    <button onClick={() => { this.ClearTimer() }}>CLEAR</button>
                    <h1> {(this.state.hours ? (this.state.hours > 9 ? this.state.hours : "0" + this.state.hours) : "00") + ":" + (this.state.minutes ? (this.state.minutes > 9 ? this.state.minutes : "0" + this.state.minutes) : "00") + ":" + (this.state.seconds > 9 ? this.state.seconds : "0" + this.state.seconds)}</h1>
                </div>
                <div className="row">
                    {cardsJSX}
                </div>
            </div>
        )
    }
}

export default Cards;
