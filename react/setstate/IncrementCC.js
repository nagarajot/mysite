/*
     In the handleIncrement method, the count is incremented directly.
     setState() method is not used.
     console shows incremented value
     But UI is not updated.

*/


import React, {Component} from 'react'

class Increment extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    handleIncrement = () => {
        this.state.count = this.state.count + 1
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {this.handleIncrement}>Increment</button>
            </div>
        )
    }
}

export default Increment



