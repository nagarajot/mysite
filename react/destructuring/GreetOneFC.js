/*
    No destructuring
*/


import React from 'react'

function GreetOneFC(props) {
    return (
        <div>
            <h1>GreetOneFC - destructuring</h1>
            <h1>{props.name} - {props.age}</h1>
        </div>
    )
}

export default GreetOneFC
