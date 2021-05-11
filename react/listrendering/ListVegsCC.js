import React, { Component } from 'react'

class ListVegsCC extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             vegs : ["Radish","Carrot","Lady Finger","Brinjal"]
        }
    }
    

    render() {
        return (
            <div>
                <h1>ListVegsCC</h1>
                {
                    this.state.vegs.map(veg => <h1>{veg}</h1>)
                }            
            </div>
        )
    }
}

export default ListVegsCC
