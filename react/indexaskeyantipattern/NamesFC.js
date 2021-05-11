/*
    Warning: Each child in a list should have a unique "key" prop.

    We need to add key prop.
    But there is no unique key in this data.
*/

import React from 'react'

function NamesFC() {

    const names = [ "John", "Rita", "Ann", "Richard"]
    const nameList = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            { nameList }
        </div>
    )
}

export default NamesFC


