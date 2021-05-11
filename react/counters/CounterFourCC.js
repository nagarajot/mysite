import React, { Component } from 'react'

class CounterFourCC extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0 
        }
    }

    incrementFive = () => {
        for ( let i = 0; i < 5; i++ ){
            this.setState(prevCount => {
                return {count: prevCount.count + 1}
            })
        }
    }

    render() {
        return (
            <div>
                <h1>CounterFourCC</h1>
                <br />
                <br />
                {this.state.count}
                <br />
                <br />
                <button onClick={this.incrementFive}>Increment 5</button>
                
            </div>
        )
    }
}

export default CounterFourCC



