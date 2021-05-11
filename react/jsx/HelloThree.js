/*
    h1 and the message are given as diff parameters.
    output will be h1Welcome from HelloThree.js
    inspect the element, last two parameters will appear as
    two text nodes in the DOM.
    <div>
        "h1"
        "Welcome from HelloThree.js"
    </div>
*/

import React from 'react'

const HelloThree = () => {
    return React.createElement('div',null,"h1","Welcome from HelloThree.js")
}

export default HelloThree


