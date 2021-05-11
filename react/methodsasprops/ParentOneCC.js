import React, { Component } from 'react'

import ChildOneFC from './ChildOneFC'

export class ParentOneCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'John'
        }

        this.greet = this.greet.bind(this)
    }

    greet()
    {
        alert(`Hello ${this.state.name}`)
        console.log(`Hello ${this.state.name}`)
    }
    

    render() {
        return (
            <div>
                <h1>ParentOneCC</h1> 
                <ChildOneFC handler={this.greet} />          
            </div>
        )
    }
}

export default ParentOneCC
