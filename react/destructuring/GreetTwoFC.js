/*
    destructuring done at the fn parameter
*/


import React from 'react'

function GreetTwoFC({name, age}) {
    return (
        <div>
            <h1>GreetTwoFC - destructuring</h1>
            <h1>{name} - {age}</h1>
        </div>
    )
}

export default GreetTwoFC
