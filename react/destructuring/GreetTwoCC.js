/*
    destructuring properties in class components
*/

import React, { Component } from 'react'

class GreetTwoCC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             firstName: "John",
             lastName: "Kennedy"
        }
    }
    
    render() {
        const {firstName, lastName } = this.state
        return (
            <div>
                <h1>GreetTwoCC - destructuring</h1> 
                <h1>{firstName} - {lastName}</h1>             
            </div>
        )
    }
}

export default GreetTwoCC

