/*
    button is changed to Increment Five.
    But, the count is not getting incremented by 5.

    watch console also.

    reason for this behaviour.
    react will bunch multiple setState() and executes only once,
    for better performance.

    what is the solution ?
    use a variation of setState() method, 
    pass a fn to setState() which takes (prevState) as parameter.

*/


import React, { Component } from 'react'

class IncrementFourCC extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        },() => {console.log('After setState : ' + this.state.count)})
        console.log(this.state.count)
    }

    incrementFive = () => {
        this.handleIncrement()
        this.handleIncrement()
        this.handleIncrement()
        this.handleIncrement()
        this.handleIncrement()
    }
    
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.incrementFive}>Increment Five</button>
            </div>
        )
    }


}

export default IncrementFourCC




