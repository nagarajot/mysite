/*
    destructuring in body
*/


import React from 'react'

function GreetThreeFC(props) {
    const { name, age } = props
    return (
        <div>
            <h1>GreetThreeFC - destructuring</h1>
            <h1>{name} - {age}</h1>
        </div>
    )
}

export default GreetThreeFC



