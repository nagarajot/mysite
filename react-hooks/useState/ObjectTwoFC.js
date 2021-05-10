/*

     spread ... operator is used to solve this problem

     both firstName and lastName properties are always preserved

*/

import React, { useState } from 'react'

function ObjectTwoFC() {
    const [ name, setName ] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <h1>ObjectTwoFC</h1>
            <input 
            type="text" 
            value={name.firstName} 
            onChange={(e) => setName({... name,firstName: e.target.value})} 
            />

            <input 
            type="text"
            value={name.lastName}
            onChange={(e) => setName({... name, lastName: e.target.value })}
            />     

            <h1>{name.firstName} - {name.lastName}</h1> 
            <h2>{JSON.stringify(name)}</h2>      
        </div>
    )
}

export default ObjectTwoFC



