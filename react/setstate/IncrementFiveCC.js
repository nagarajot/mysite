/*
    prevState is updated here
    setState has 2 parameters   prevState and props
*/

import React, {Component} from 'react'

class IncrementFiveCC extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    handleIncrement = () => {
        this.setState((prevState,props) => ({
            count: prevState.count + 1
        }))
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

export default IncrementFiveCC






