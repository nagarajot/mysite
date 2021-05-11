import React from 'react'

function ListFruitsFC() {

    const fruits = [ "Apple", "Mango", "Grapes", "Banana", "Papaya"]
    return (
        <div>
            <h1>{fruits[0]}</h1>
            <h1>{fruits[1]}</h1>
            <h1>{fruits[2]}</h1>
            <h1>{fruits[3]}</h1>
            <h1>{fruits[4]}</h1>
            
        </div>
    )
}

export default ListFruitsFC
