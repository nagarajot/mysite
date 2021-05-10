/*
    Write a functional component called as CounterCC.js
    Counter initialized to 0.
    Increment button.
    When increment button is clicked, increment the counter by 1.
*/



import React, { useState } from 'react'

function CounterFC() {
    // array destructuring
    const [ count, setCount ] = useState(0)

    return (
        <div>
            <h1>CounterFC</h1>
            { count }
            <br />
            <button onClick={() => setCount(count + 1)}>Increment</button>
            
        </div>
    )
}

export default CounterFC
