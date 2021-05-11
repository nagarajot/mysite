import React, {Component} from 'react'

class GreetTwoCC extends Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Welcome visitor ..."
        }
    }
    
    handleChange = () => {
        this.setState({
            message: "Thanks for subscription ..."
        })
    }

    render()
    {
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.handleChange}>Subscribe</button>
            </div>
        )
    }
}

export default GreetTwoCC




