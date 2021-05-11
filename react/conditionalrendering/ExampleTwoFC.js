import React, { useState } from 'react'

function ExampleTwoFC() {

    const [ state, setState ] = useState({
        flag: true
    })

    let message;

    if ( state.flag ) {
        message = "Welcome to cricket team";
    } else {
        message = "Welcome to football team";
    }

    return (
        <div>
            <h1>ExampleTwoFC</h1>
            { message }
        </div>
    )
}

export default ExampleTwoFC




