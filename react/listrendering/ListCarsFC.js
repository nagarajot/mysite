import React from 'react'

function ListCarsFC() {

    const cars = ["Maruti","Honda","Hyundai","Toyota"]
    const carsList = cars.map(car => <h1>{car}</h1>)
    console.log(carsList);
    return (
        <div>{ carsList }</div>
    )
}

export default ListCarsFC




