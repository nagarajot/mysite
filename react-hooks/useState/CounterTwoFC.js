/*
    Add a button called as Increment Five
    and in the function increemntFive() call setCount()
    method 5 times.

    When Increment Five button is clicked, the count gets incremented by 1.
    Because the setCount method is reading the stale value of the count.

    In the setCount() function, we should use a second variant,
    pass a function which has access to the previous value.

    Wheneer you want to update the state value based on prev value,
    use this variant of setCount() method.
*/





import React, { useState } from 'react'

function CounterTwoFC() {
    const initialCount = 0
    const [ count, setCount ] = useState(0)

    const incrementFive = () => {
        for ( let i = 1; i <= 5; i++ )
            setCount(count+1)
    }

    return (
        <div>
            <h1>CounterTwoFC</h1>
            { count }
            <br />
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={incrementFive}>Increment Five</button>
            
        </div>
    )
}

export default CounterTwoFC
