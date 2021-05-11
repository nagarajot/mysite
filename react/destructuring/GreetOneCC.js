/*
    destructurin gof props in a class component
*/

import React, { Component } from 'react'

class GreetOneCC extends Component {
    render() {
        const {name,age} = this.props
        return (
            <div>
                <h1>GreetOneCC - destructuring</h1>
                <h1>{name} - {age}</h1>
            </div>
        )
    }
}

export default GreetOneCC
