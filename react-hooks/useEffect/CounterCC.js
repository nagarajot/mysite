import React, { Component } from 'react'

class  CounterCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        document.title = `Clicked ${this.state.count} times`
    }


    render() {
        return (
            <div>
                <h1>CounterCC</h1>
                { this.state.count }
                <br />
                <button onClick={() => this.setState({count : this.state.count + 1})}>Click Me</button>
                
            </div>
        )
    }
}

export default CounterCC
