/*
     this component has 2 props, name and age
*/

import React from 'react'

const WelcomeTwoFC = (props) => {
    console.log(props)
    return (
        <div><h1>{props.name} - {props.age}</h1></div>
    )
}

export default WelcomeTwoFC












