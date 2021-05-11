/*
     ternary conditional operator
*/

import React, { Component } from 'react'

class ExampleThreeCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           flag: false  
        }
    }

    render() {
        return (
            this.state.flag  ?
            <div>
                <h1>ExampleThreeCC</h1>
                Welcome to cricket team
            </div> :
            <div>
                <h1>ExampleThreeCC</h1>
                Welcome to football team
            </div>
        )
    }
}

export default ExampleThreeCC


