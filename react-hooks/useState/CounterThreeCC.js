/*
     The diff variation of setState() method is used,
     which takes prevState as the parameter and returns 
     a function, which returns the updated value
*/

import React, { Component } from 'react'

export class CounterThreeCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment = () => {
        this.setState(prevState => {
            return {
                count : prevState.count + 1
            }
        })
    }

    decrement = () => {
        this.setState(prevState => {
            return {
                count : prevState.count - 1
            }
        })
    }

    incrementFive = () => {
        for ( let i = 1; i <= 5; i++ )
        this.setState(prevState => {
            return {
                count : prevState.count + 1
            }
        })
    }



    render() {
        return (
            <div>
                <h1>CounterThreeCC</h1>
                { this.state.count }
                <br />
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={() => this.setState({count: 0})}>Reset</button>
                <button onClick={this.incrementFive}>IncrementFive</button>
            </div>
        )
    }
}

export default CounterThreeCC


