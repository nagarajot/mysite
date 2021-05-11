import React, { Component } from 'react'

class ListCarsCC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cars: ["Volkswagen","Mercedez","Volvo","Nissan"]
        }
    }
    

    render() {
        const carsList = this.state.cars.map(car => <h1>{car}</h1>)
        return (
            <div>
                { carsList }           
            </div>
        )
    }
}

export default ListCarsCC



