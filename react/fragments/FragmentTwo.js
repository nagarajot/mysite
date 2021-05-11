/*
    In this program we are trying to send back 2 elements
    in the JSX.
    This results in a an error.
    JSX expressions should have one parent element
*/

import React from 'react'

function FragmentTwo() {
    return (
        <h1>
            Computer Science
        </h1>
        <p>
            This is a paragraph
        </p>
    )
}

export default FragmentTwo
