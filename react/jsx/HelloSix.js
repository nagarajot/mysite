/*
    className is used instead of class
    no warnings in console

    
*/


import React from 'react'

const HelloSix = () => {
    return React.createElement(
        'div',
        {id:'hel',className: 'dummy'},
        React.createElement('h1',null,'Welcome from HelloSix.js')
    )
}

export default HelloSix


