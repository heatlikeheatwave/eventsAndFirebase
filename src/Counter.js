import React, { Component } from 'react';

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            personCount: 0,
            weather: 'bad',
            names: ['Sam', 'Billy', 'Bardo']
        }
    }

    incrementCount = () => {
        const newNames = this.state.names;

        newNames.push('Cherry');
        
        this.setState({
            personCount: this.state.personCount + 1,
            weather: 'good',
            names: newNames
        });
    }

    render(){
        return (
            <div>            
                <p>This page has been visited {this.state.personCount} times. The weather is {this.state.weather}</p>
                <button onClick={this.incrementCount}>I visited you!</button>

                {this.state.names.map((name, index) => {
                    return (
                        <p key={`${index}`}>Hi there, {name}!</p>
                    )
                })}
            </div>
        )
    }
}

export default Counter;