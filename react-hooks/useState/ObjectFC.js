/*
    useState with object

    When you type the first name, it appears within h1
    When you start typing the lastname, firstname disappears
    and only lastName appears.

    useState() does not automatically merge and updates the object.
    It has to be done manually, by using spread ... operator.

    In case of class component setState method will merge and update automatically
*/

import React, { useState } from 'react'

function ObjectFC() {
    const [ name, setName ] = useState({firstName: '', lastName: ''})
    return (
        <div>
            <h1>ObjectFC</h1>
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
        </div>
    )
}

export default ObjectFC



