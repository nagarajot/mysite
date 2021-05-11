/*
    second par of setState() fn is used.
    call back fn is used as the second parameter

    callback fn will be called, after the UI is updated
    watch the console
*/

import React, {Component} from 'react'

class IncrementThreeCC extends Component
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
        }, () => {console.log('After setState : ' + this.state.count)})
        console.log(this.state.count)
    }


    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}

export default IncrementThreeCC

