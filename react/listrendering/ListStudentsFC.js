import React from 'react'

function ListStudentsFC() {

    const students = [
        { id:1, name:"John", gender:"M", qln:"BE" },
        { id:2, name:"Richard", gender:"M", qln:"BCom" },
        { id:3, name:"Ann", gender:"F", qln:"BSc" },
        { id:4, name:"John", gender:"M", qln:"BE" },
        { id:5, name:"Rita", gender:"F", qln:"BCom" }
    ]

    const studentsList = students.map(student => <h1>{student.id} - { student.name } - { student.gender} - { student.qln }</h1>)

    return (
        <div>
            { studentsList }
        </div>
    )
}

export default ListStudentsFC



