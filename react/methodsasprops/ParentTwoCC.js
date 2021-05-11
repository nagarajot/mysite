import React, { Component } from 'react'

import ChildTwoFC from './ChildTwoFC'

export class ParentTwoCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'John'
        }

        this.greet = this.greet.bind(this)
    }
    
    greet(age)
    {
        console.log(`Hello ${this.state.name} age : ${age}`)
        alert(`Hello ${this.state.name} age : ${age}`)
    }


    render() {
        return (
            <div>
                <h1>ParentTwoCC</h1>   
                <ChildTwoFC handler={this.greet} />            
            </div>
        )
    }
}

export default ParentTwoCC
