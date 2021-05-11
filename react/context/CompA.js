/*
    3 steps
    1. create a context
    2. provide a context value
    3. consume the context value

*/

import React, { Component } from 'react'

import CompB from './CompB'

class CompA extends Component {
    render() {
        return (
            <div>
                <h1>Inside Comp A</h1>
                <CompB />                
            </div>
        )
    }
}

export default CompA
