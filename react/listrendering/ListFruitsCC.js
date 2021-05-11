import React, { Component } from 'react'

class ListFruitsCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             fruits : [ "Apple","Mango","Grapes","Banana","Pineapple"]
        }
    }
    
    render() {

        return (
            <div>
                <h1>{this.state.fruits[0]}</h1>
                <h1>{this.state.fruits[1]}</h1>
                <h1>{this.state.fruits[2]}</h1>
                <h1>{this.state.fruits[3]}</h1>
                <h1>{this.state.fruits[4]}</h1>
            </div>
        )
    }
}

export default ListFruitsCC
