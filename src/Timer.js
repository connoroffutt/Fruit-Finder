import React, { Component } from 'react';
import Cards from './Cards';
import App from './App.js';


class Timer extends Component {
    constructor() {
        super();

        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            t: 0
        }

        this.StartTimer = this.StartTimer.bind(this);
        this.CountTime = this.CountTime.bind(this);
    }



    CountTime() {
        this.setState({
            seconds: this.state.seconds+1
        });
        

        if (this.state.seconds >= 60) {
            this.setState({
                seconds: 0,
                minutes: this.state.minutes+1
            });
        
            if (this.state.minutes >= 60) {
                this.setState({
                    minutes: 0,
                    hours: this.state.hours+1
                });
                
            }
        }
            this.StartTimer();
            
    }

        StartTimer(){
            this.setState({
                t : setTimeout(()=>{this.CountTime()}, 1000)
            })
            
        }

        StopTimer(){
            clearTimeout(this.state.t);
        }

        ClearTimer(){
            clearTimeout(this.state.t);
            this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0,
            t: 0 })
        }

        render() {
        
            return (
                <div>
                    <button onClick={()=>{this.StartTimer()}}>START</button>
                    <button onClick={()=>{this.StopTimer()}}>STOP</button>
                    <button onClick={()=>{this.ClearTimer()}}>CLEAR</button>
                     <h1> {(this.state.hours ? (this.state.hours > 9 ? this.state.hours : "0" + this.state.hours) : "00") + ":" + (this.state.minutes ? (this.state.minutes > 9 ? this.state.minutes : "0" + this.state.minutes) : "00") + ":" + (this.state.seconds > 9 ? this.state.seconds : "0" + this.state.seconds)}</h1>
                </div>
                
            )
        }
    }









    export default Timer;