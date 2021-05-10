/*
    Write a functional component called as COunterOneFC.
    Counter initialized to 0.
    Have 3 buttons Reset, Increment and Decrement

    This method of implementation is not safe.

*/


import React, {useState} from 'react'

function CounterOneFC() {
    const initialCount = 0
    const [ count, setCount ] = useState(initialCount)

    return (
        <div>
            <h1>CounterOneFC</h1>
            { count }
            <br />
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

        </div>
    )
}

export default CounterOneFC



