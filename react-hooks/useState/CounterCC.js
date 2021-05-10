/*
    Write a class component called as CounterCC.js
    Counter initialized to 0.
    Increment button.
    When increment button is clicked, increment the counter by 1.
*/



import React, { Component } from 'react'

class CounterCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>CounterCC</h1>
                { this.state.count }
                <br />
                <button onClick={this.handleIncrement}>Increment</button>                
            </div>
        )
    }
}

export default CounterCC
