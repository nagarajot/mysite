/*
    duplicate names exists.
    use index as the key
*/

import React from 'react'

function NamesFourFC() {
    const names = ["Bob","Chris","Dany","Francis","Bob"]
    const namesList = names.map((name, index) => <h2 key="index">{index} - {name}</h2>)
    return (
        <div>
            <h1>NamesFourFC</h1>
            {namesList}
        </div>
    )
}

export default NamesFourFC
