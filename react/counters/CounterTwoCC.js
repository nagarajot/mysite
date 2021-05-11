import React, {Component} from 'react'

class CounterTwoCC extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            count: 0
        }
    }

        increment = () => {
            this.setState({
                count: this.state.count + 1
            })
        }

        decrement = () => {
            this.setState({
                count: this.state.count-1
            })
        }

        reset = () => {
            this.setState({
                count: 0
            })
        }

        render ()
        {
            return (
                <div>
                    <h1>CounterTwoCC</h1>
                    {this.state.count}
                    <br />
                    <br />
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.reset}>Reset</button>
                </div>
            )
        }
}

export default CounterTwoCC


