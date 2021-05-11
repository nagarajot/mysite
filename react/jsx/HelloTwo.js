/*
     in this the message is enclosed within h1.
     but in the output h1 also appears in the output.
     the effect of h1 is not seen.

     inspect the element and check that h1
     is not a DOM node
*/


import React from 'react'

const HelloTwo = () => {
    return React.createElement('div',null,'<h1>Welcome from HelloTwo.js</h1>')
}

export default HelloTwo



