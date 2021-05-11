/*
    application breaks when click button is pressed
    because key word this is not defined within the function.
    this will have the value of undefined.
*/


import React, { Component } from 'react'

class BindEventTwoCC extends Component {

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
                <h1>BindEventTwoCC</h1>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default BindEventTwoCC





