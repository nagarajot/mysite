/*
     In a class component, props are available as
     this.props.name and this.props.age etc
*/

import React, { Component } from 'react'

class WelcomeTwoCC extends Component
{
    render() {
        return (
            <h1>{this.props.name} - {this.props.age}</h1>
        )
    }
}

export default WelcomeTwoCC



