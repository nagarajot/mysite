/*
    Conditionally run effects

    Add a text input to accept the name from the user.
    Add a state variable called as name and intialize it to an empty string
    In JSX add an input element.

    Add a console.log in the componentDidUpdate

    When you click a button, document title is updated
    When you type any char in the name, document title is updated,
    even though there is no change in the value.
    Unnecessary updation of document title

    Avoid this.
    Conditionally update the title.





*/


import React, { Component } from 'react'

export class CounterOneCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
             name : ''
        }
    }

    componentDidMount()
    {
        document.title = `Clicked ${this.state.count} times`
        console.log('componentDidMount ...')
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevState.count !== this.state.count )
        {
            document.title = `Clicked ${this.state.count} times`
            console.log('componentDidUpdate ...')
        }
    }

    render() {
        return (
            <div>
                <h1>CounterOneCC</h1>
                { this.state.count }
                <br />
                <input type="text" value={this.state.name} onChange={e => {
                    this.setState({
                        name : e.target.value
                    })
                }} />
                <br />
                <button onClick={() => this.setState({ count: this.state.count + 1})}>Click Me</button>                
            </div>
        )
    }
}

export default CounterOneCC



