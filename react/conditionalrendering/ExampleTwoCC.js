/*
    JS variable is used to store the message
    Element variable method
*/

import React, { Component } from 'react'

export class ExampleTwoCC extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             flag: false
        }
    }

    render() {
        let message;
        if ( this.state.flag ) {
            message = <div>Welcome to cricket team</div>
        } else {
            message = <div>Welcome to football team</div>
        }
        return (
            <div>
                <h1>ExampleTwo</h1>
                {message}               
            </div>
        )
    }
}

export default ExampleTwoCC



