/*
   component is a dynamic component.
   check the console.
   it displays object.
*/

import React from 'react'

const WelcomeFC = (props) => {
    console.log(props)
    return (<div><h1>Welcome, {props.name}</h1></div>)
}

export default WelcomeFC





