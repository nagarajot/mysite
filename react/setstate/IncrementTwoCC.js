/*
    setState() method is used to update the state.
    So, UI is updated.

    Dos and Donots
    Never modify the state directly.
    Instead use setState()

    console value is one less than UI value.
    This is because calls to setState() is asynchronous.
    console.log() is called before the state is actually set.

    Sometimes you may want to do something after the UI is updated.
    In such cases, pass a callback function as the second parameter
    to setState().

    Shown in next program.
*/

import React, {Component} from 'react'

class IncrementTwo extends Component
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
        })
        console.log(this.state.count)
    }


    render()
    {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increment</button> 
            </div>
        )
    }
}

export default IncrementTwo





