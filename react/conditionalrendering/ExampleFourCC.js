/*
      Short circuit operator
*/

import React, { Component } from 'react'

class ExampleFourCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             flag: true
        }
    }

    render() {
        return ( this.state.flag && 
        <div>
              <h1>ExampleFourCC</h1>
              Welcome to cricket team
        </div>
        )
    }
}

export default ExampleFourCC


