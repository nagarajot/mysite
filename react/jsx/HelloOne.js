/*
     component written without using JSX.
     this is slightly different.
     we wanted the message within h1 tag.
     it is shown in HelloTwo.js
*/


import React from 'react'

const HelloOne = () => {
    return React.createElement('div',null,"Welcome from HelloOne.js")
}

export default HelloOne

