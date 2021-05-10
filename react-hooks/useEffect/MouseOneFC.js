/*
    To make useEffect to call only once,
    add the second par []

    logCoordinates is called many times

*/


import React, { useState, useEffect } from 'react'

function MouseOneFC() {
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
    },[])

    return (
        <div>
            <h1>MouseFC</h1>
            <h1>Hooks : x = {x}  y = {y}</h1>
        </div>
    )
}

export default MouseOneFC


