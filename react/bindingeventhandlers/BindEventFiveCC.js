/*
    binding is done in the constructor
    binding happens only once, unlike in the render method

    */


import React, { Component } from 'react'

class BindEventFiveCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }

        this.handleClick = this.handleClick.bind(this)
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
                <h1>BindEventFiveCC</h1>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

export default BindEventFiveCC

