/*
    useEffect called only once.
    pass an empty array as the second parameter.

    when the mouse is moved only mouseevent is called and
    useEffect() is not called

    Add a mousemove listener in useEffect()


*/


import React, { useState, useEffect } from 'react'

function MouseFC() {
    const [ x, setX ] = useState(0)
    const [ y, setY ] = useState(0)

    const logCoordinates = e => {
        console.log('Inside logCoordinates ...')
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(() => {
        console.log('Inside useEffect ...')
        window.addEventListener('mousemove',logCoordinates)
    })

    return (
        <div>
            <h1>MouseFC</h1>
            <h1>Hooks : x = {x}  y = {y}</h1>
        </div>
    )
}

export default MouseFC
