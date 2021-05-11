import React, {useState} from 'react'

function CounterThreeFC() {
    const initialCount = 0;
    const [count,setCount] = useState(initialCount);

    const incrementFive = () => {   
        for ( let i = 0; i < 5; i++ ){
            setCount(count+1)
        }
    }

    return (
        <div>
            <h1>CounterThreeFC</h1>
            <br />
            <br />
            {count}
            <br />
            <br />
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default CounterThreeFC




