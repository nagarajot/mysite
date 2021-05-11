import React, { Component } from 'react'

export class ClickOneCC extends Component {
/*
    handleClick()
    {
        console.log('click pressed')
    }
*/
    handleClick = () => {
        console.log('click pressed')
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default ClickOneCC
