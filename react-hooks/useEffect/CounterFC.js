/*
    useEffect() is used to update the document title in 2 occasions
    1. initial render
    2. on change of state (update)

*/

import React, { useState, useEffect } from 'react'

function CounterFC() {
    const [ count, setCount ] = useState(0)

    // executed eveytime the component renders
    useEffect(() => {
        document.title = `CLicked ${count} no of times`
    })

    return (
        <div>
            <h1>CounterFC</h1>
            { count }
            <br />
            <button onClick={() => setCount(count + 1)}>Click Me</button>
            
        </div>
    )
}

export default CounterFC



