/*
     No warnings in the console
*/

import React from 'react'

function NamesTwoFC() {

    const names = [ "John", "Rita", "Ann", "Bob"]
    const namesList = names.map(name => <h2 key={name}>{name}</h2>)
    return (
        <div>
            { namesList }
        </div>
    )
}

export default NamesTwoFC



