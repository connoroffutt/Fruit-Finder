import React, { Component } from 'react';
import './Cards.css';

const cards = [
    { img: '../images/apple.gif', id: 0, flipped: 0},
    { img: '../images/banana.gif', id: 1, flipped: 0},
    { img: '../images/cherries.gif', id: 2, flipped: 0},
    { img: '../images/dragonfruit.png', id: 3, flipped: 0},
    { img: '../images/grapes.png', id: 4, flipped: 0},
    { img: '../images/lemon.png', id: 5, flipped: 0},
    { img: '../images/lime.gif', id: 6, flipped: 0},
    { img: '../images/orange.jpg', id: 7, flipped: 0},
    { img: '../images/strawberry.png', id: 8, flipped: 0},
    { img: '../images/watermelon.png', id: 9, flipped: 0},
    { img: '../images/apple.gif', id: 10, flipped: 0},
    { img: '../images/banana.gif', id: 11, flipped: 0},
    { img: '../images/cherries.gif', id: 12, flipped: 0},
    { img: '../images/dragonfruit.png', id: 13, flipped: 0},
    { img: '../images/grapes.png', id: 14, flipped: 0},
    { img: '../images/lemon.png', id: 15, flipped: 0},
    { img: '../images/lime.gif', id: 16, flipped: 0},
    { img: '../images/orange.jpg', id: 17, flipped: 0},
    { img: '../images/strawberry.png', id: 18, flipped: 0},
    { img: '../images/watermelon.png', id: 19, flipped: 0}
]


class Cards extends Component {

    constructor() {
        super();
        this.state = {
            clicks: 0,
            elem1: "",
            matches: 0,
            flipped: 0,
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
        this.FlipCard = this.FlipCard.bind(this);
        this.FlipBack = this.FlipBack.bind(this);
    }

    CheckMatch(elem) {
        if (this.state.elem1.img === elem.img) {
            console.log('Match found!');
            this.ShowMatch(elem);
        } else if (this.state.elem1.img !== elem.img) {
            this.FlipBack(elem);
        };
    }


    Click(elem) {
        if (this.state.clicks <= 1) {
            this.setState({
                elem1: elem,
                clicks: 2
            });
            this.FlipCard(elem);
            console.log(this.state.clicks)
        } else if (this.state.clicks === 2) {
            this.FlipCard(elem);
            this.CheckMatch(elem);
            this.setState({
                clicks: 1
            });
         console.log(this.state.clicks)
         console.log(elem)   
        }
    }

    FlipBack(elem) {
        setTimeout(()=>{cards.splice(elem.id, 1, {img: elem.img, id: elem.id, flipped: 0 })} ,150)
        setTimeout(()=>{cards.splice(this.state.elem1.id, 1, {img: this.state.elem1.img, id: this.state.elem1.id, flipped: 0 })} ,150)
    }

    FlipCard(elem) {

        cards.splice(elem.id, 1, {img: elem.img, id: elem.id, flipped: 1 })

          // 
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
                            <div id={i}>
                                <img onClick={() => {this.FirstClick(elem)}}
                                src="../images/bowloffruit.png" 
                                className={elem.flipped === 0 ? "cardBackStart" : "cardBackFlipped"}
                                alt="backofcard"/>
                                <img src={elem.img} 
                                className={elem.flipped === 0 ? "cardDisplay" : "cardDisplayShowing"}
                                alt="fruitcard" />
                            </div>
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
