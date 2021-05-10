/*

    Increment Five button is added
    But, when it is pressed, the value is incremented by 1.
    React is taking the stale value.
*/

import React, { Component } from 'react'

export class CounterTwoCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    incrementFive = () => {
        for ( let i = 1; i <=5; i++ )
            this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <div>
                <h1>CounterTwoCC</h1>
                { this.state.count }
                <br />
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>        
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrement</button>        
                <button onClick={() => this.setState({ count: 0})}>Reset</button>
                <button onClick={this.incrementFive}>Increment Five</button>
            </div>
        )
    }
}

export default CounterTwoCC

