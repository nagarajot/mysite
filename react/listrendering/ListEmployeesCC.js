/*
Warning: Each child in a list should have a unique "key" prop.
*/

import React, { Component } from 'react'

import Employee from './Employee'

class ListEmployeesCC extends Component {
    render() {
        const employees = [
            { id:1, name:"John", gender:"M", qln:"BE" },
            { id:2, name:"Richard", gender:"M", qln:"BCom" },
            { id:3, name:"Ann", gender:"F", qln:"BSc" },
            { id:4, name:"John", gender:"M", qln:"BE" },
            { id:5, name:"Rita", gender:"F", qln:"BCom" }
        ]
    
        const employeesList = employees.map(e => <Employee emp={e} />)
        return (
            <div>
                <h1>ListEmployeesCC</h1>
                { employeesList }              
            </div>
        )
    }
}

export default ListEmployeesCC
