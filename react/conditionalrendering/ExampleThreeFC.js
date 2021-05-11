import React, { useState } from 'react'

function ExampleThreeFC() {

    const [ state, setState ] = useState({
        flag: true
    });

    return (
        (state.flag) ?
        <div>
            <h1>ExampleThreeFC</h1>
            Welcome to cricket team
        </div> :
        <div>
            <h1>ExampleThree</h1>
            Welcome to football team
        </div>
    )
}

export default ExampleThreeFC



