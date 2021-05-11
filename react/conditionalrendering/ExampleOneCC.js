/*
     Uses id/else for conditional rendering

     Write a class component
     Have a state called as flag.
     If flag = true
          display the message 'Welcome to cricket team"
     else
        display the message "Welcome to football team"

*/

import React, { Component } from 'react'

class ExampleOneCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            flag: true 
        }
    }

    render() {
        if ( this.state.flag) {
            return <div>
                        <h1>ExampleOne</h1>
                        Welcome to cricket team
                   </div>
        } else {
            return <div>
                        <h1>ExampleOne</h1>
                        Welcome to football team
                   </div>
        }
    }
}

export default ExampleOneCC



