
import React, {useState} from 'react'

function CounterFC() {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    return (
        <div>
            <h1>CounterFC</h1>
            {count}
            <br />
            <br />
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default CounterFC


