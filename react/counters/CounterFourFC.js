// second form of setCount method is used
// it takes prev state as the parameter and returns a new value
// as a function

import React, {useState} from 'react'

function CounterFourFC() {
    const initialCount = 0;
    const [ count, setCount ] = useState(initialCount);

    const incrementFive =() => {
        for ( let i = 0; i < 5; i++ ){
            setCount(prevCount => prevCount+1)
        }
    }

    return (
        <div>
            <h1>CounterFourFC</h1>
            <br />
            <br />
            {count}
            <br />
            <br />
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default CounterFourFC
