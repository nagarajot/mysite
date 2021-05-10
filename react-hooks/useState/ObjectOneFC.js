/*
     JSON.stringify is used to display the name object.
     It is observed that, when we start typing on the firstName,
     secondName is removed from the name object.
     When we start typing on the lastName, firstName is removed from the 
     name object

     spread ... operator is used to solve this problem
*/

import React, { useState } from 'react'

function ObjectOneFC() {
    const [ name, setName ] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <h1>ObjectOneFC</h1>
            <input 
            type="text" 
            value={name.firstName} 
            onChange={(e) => setName({firstName: e.target.value})} 
            />

            <input 
            type="text"
            value={name.lastName}
            onChange={(e) => setName({lastName: e.target.value })}
            />     

            <h1>{name.firstName} - {name.lastName}</h1> 
            <h2>{JSON.stringify(name)}</h2>      
        </div>
    )
}

export default ObjectOneFC



