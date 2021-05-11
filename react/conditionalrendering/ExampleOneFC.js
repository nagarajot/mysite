import React, {useState} from 'react'

function ExampleOneFC() {

    const [state, setState] = useState({
        flag: false
    });

    if ( state.flag ) {
        return <div>
                   <h1>ExampleOneFC</h1>
                   Welcome to cricket team 
               </div>
    } else {
        return <div>
                   <h1>ExampleOneFC</h1>
                   Welcome to football team 
               </div>

    }           

}

export default ExampleOneFC
