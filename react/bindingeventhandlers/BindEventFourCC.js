/*
    onClick changed to arrow function
*/


import React, { Component } from 'react'

class BindEventFourCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
    }
    
    handleClick()
    {
        console.log(this);

        this.setState({
            message: 'Welcome'
        })
    }

    render() {
        return (
            <div>
                <h1>BindEventFourCC</h1>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.handleClick()}>Click</button>
            </div>
        )
    }
}

export default BindEventFourCC

