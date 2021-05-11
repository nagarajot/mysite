import React, { Component } from 'react'

import CompC from './CompC'

class CompB extends Component {
    render() {
        return (
            <div>
                <h1>Inside Comp B</h1>
                <CompC />
            </div>
        )
    }
}

export default CompB
