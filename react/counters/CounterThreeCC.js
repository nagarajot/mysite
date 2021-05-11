// when increment 5 button is clicked, the 
// counter is getting incremented by 1

import React, {Component} from 'react'

class CounterThreeCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count: 0,         
        }
    }

    incrementFive = () => {
        for ( let i = 0; i < 5; i++ ){
            this.setState({
                count:this.state.count+1
            })
        }
    }

    render() {
        return (
            <div>
                <h1>CounterThreeCC</h1>
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

export default CounterThreeCC



