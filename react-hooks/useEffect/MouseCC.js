/*
    Write a program to log the mouse coordinates into the screen.

    componentDisMount() is called only once
    Inside componentDidMouse set up a listener for mousemove

    listener method is called for every mouse move,
    and the coordinates are logged to the screen
*/

import React, { Component } from 'react'

class MouseCC extends Component {

    constructor(props) {
        super(props)

        this.state = {
            x: 0,
            y: 0
        }
    }

    logCoordinates = e => {
        this.setState({
            x: e.clientX, y: e.clientY
        })
    }

    componentDidMount()
    {
        window.addEventListener('mousemove',this.logCoordinates)
    }

    render() {
        return (
            <div>
                <h1>MouseCC</h1>
                <h1>x = {this.state.x} y = {this.state.y}</h1>       
            </div>
        )}
}

export default MouseCC


