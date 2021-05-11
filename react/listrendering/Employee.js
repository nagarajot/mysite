import React from 'react'

function Employee({emp}) {
    return (
        <div>
            <h1>{emp.name}</h1>
            <h2>{emp.gender}</h2>
            <h2>{emp.qln}</h2>
        </div>
    )
}

export default Employee
