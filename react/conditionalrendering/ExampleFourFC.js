import React, { useState } from 'react'

function ExampleFourFC() {

    const [ state, setState ] = useState({
        flag: true
    })

    return (
        ( state.flag ) && 
        <div>
            <h1>ExampleFourFC</h1>
            Welcome to cricket team
        </div>
    )
}

export default ExampleFourFC
