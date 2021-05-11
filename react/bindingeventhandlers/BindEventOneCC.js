/*
    Msg Hello is displayed
    Button is displayed, onClick event is not attached
*/

import React, { Component } from 'react'

class BindEventOneCC extends Component {

    constructor(props) {
        super(props)

        this.state = {
             message: 'Hello'
        }
    }

    render() {
        return (
            <div>
              <h1>BindEventOneCC</h1>
              <h1>{this.state.message}</h1>  
              <button>Click</button>  
            </div>
        )
    }
}

export default BindEventOneCC
