import React, {Component} from 'react'

class GreetCC extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Welcome visitor ..."
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        )
    }

}

export default GreetCC


