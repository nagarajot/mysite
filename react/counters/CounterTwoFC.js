// this program is working
// but this is not the best method 
// it is unsafe to change the value of count

import React, {useState} from 'react'


function CounterTwoFC() {

    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    const reset = () => {
        setCount(0)
    }




    return (
        <div>
            <h1>CounterTwoFC</h1>
            {count}
            <br />
            <br />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default CounterTwoFC
