/*
    write the handler fn as arrow fn
    */


    import React, { Component } from 'react'

    class BindEventSixCC extends Component {
    
        constructor(props) {
            super(props)
        
            this.state = {
                 message: 'Hello'
            }
    
            this.handleClick = this.handleClick.bind(this)
        }
        
        handleClick = () =>
        {
            this.setState({
                message: 'Welcome'
            })
        }
    
        render() {
            return (
                <div>
                    <h1>BindEventSixCC</h1>
                    <h1>{this.state.message}</h1>
                    <button onClick={this.handleClick}>Click</button>
                </div>
            )
        }
    }
    
    export default BindEventSixCC
    
    