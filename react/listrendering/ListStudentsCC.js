import React, { Component } from 'react'

export class ListStudentsCC extends Component {

    


    render() {
        const students = [
            { id:1, name:"John", gender:"M", qln:"BE" },
            { id:2, name:"Richard", gender:"M", qln:"BCom" },
            { id:3, name:"Ann", gender:"F", qln:"BSc" },
            { id:4, name:"John", gender:"M", qln:"BE" },
            { id:5, name:"Martina", gender:"F", qln:"BA" }
        ]

        const studentsList = students.map(student => <h1>{student.name} - { student.qln}</h1>)

        return (
            <div>
                {
                    studentsList
                }
            </div>
        )
    }
}

export default ListStudentsCC
