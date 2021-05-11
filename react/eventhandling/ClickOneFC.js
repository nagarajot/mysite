/*
    event handling in fnctional components
*/

import React from 'react'

function ClickOneFC() {
/*
    const handleClick = () => {
        console.log('clicked')
    }
*/
    function handleClick() 
    {
        console.log('clicked')
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>            
        </div>
    )
}

export default ClickOneFC


