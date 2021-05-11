/*
      bind this keyword to eventhandler
      onClick = {this.handleClick.bind(this)}

    because, this keyword is not available in the handler function,
    binding is necessary in case of class components

    any updation to UI in handler, calls the render method and bind is executed
    all the time.
    performance problem
*/


import React, { Component } from 'react'

class BindEventThreeCC extends Component {

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
                <h1>BindEventThreeCC</h1>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick.bind(this)}>Click</button>
            </div>
        )
    }
}

export default BindEventThreeCC





