/*
    In this example setCount() method takes prev value as a parameter.
*/




import React, { useState } from 'react'

function CounterThreeFC() {
    const initialCount = 0
    const [ count, setCount ] = useState(initialCount)

    const incrementFive = () => {
        for ( let i = 1; i <= 5; i++ )
        setCount(prevCount => prevCount + 1)
    }

    return (
        <div>
            <h1>CounterThreeFC</h1>
            { count }
            <br />
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1) }>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1) }>Decrement</button>
            <button onClick={incrementFive}>Increment Five</button>

        </div>
    )
}

export default CounterThreeFC
