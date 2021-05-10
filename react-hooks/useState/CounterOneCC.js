/*
    The program will work, but it is not a safe method
*/


import React, { Component } from 'react'

class CounterOneCC extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>CounterOneCC</h1>  
                { this.state.count }
                <br />
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrement</button>
                <button onClick={() => this.setState({count: 0})}>Reset</button>

            </div>
        )
    }
}

export default CounterOneCC
