/*
    par 2 is used.
    an object of attributes (name/value) pair.
    class is a key word in JS.
    className has to be used in react.
    check the warning in console

    Warning: Invalid DOM property `class`. Did you mean `className`?
*/

import React from 'react'

const HelloFive = () => {
    return React.createElement(
        'div',
        {id: 'hel', class: 'dummy'},
        React.createElement('h1',null,'Welcome from HelloFive.js')
    )
}

export default HelloFive



