/*
    Duplication of names Bob
    Warning in console

    Warning: Encountered two children with the same key, `Bob`. 
    Keys should be unique so that components maintain their identity across updates. 
    Non-unique keys may cause children to be duplicated and/or omitted — 
    the behavior is unsupported and could change in a future version.
*/

import React from 'react'

function NamesThreeFC() {

    const names = ["John","Rita","Bob", "Robert","Bob"]
    const namesList = names.map(name => <h2 key={name}>{name}</h2>)

    return (
        <div>
            <h1>NamesThreeFC</h1>
            {namesList}
        </div>
    )
}

export default NamesThreeFC
