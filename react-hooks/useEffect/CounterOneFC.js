/*
    useEffect() is called after each render.
    It may cause performance problems.
    We need to update the DOM conditionally.

    Add a text element in the JSX.

    Within useEffect add a log statement

    solution:
    pass the second par to the useEffect()
    It is an array.
    List the variables, which has to be observed.


    */

import React, { useState, useEffect } from 'react'

function CounterOneFC() {

    const [ count, setCount ] = useState(0)
    const [ name, setName ] = useState('')

    useEffect(() => {
        document.title = `Clicked ${count} times`
        console.log('Inside useEffect() ...')
    },[count])

    return (
        <div>
            <h1>CounterOneFC</h1>
            { count }
            <br />
            <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            />
            <br />
            <button onClick={() => setCount(count+1)}>Click Me</button>    
        </div>
    )
}

export default CounterOneFC

