/*
    The problem of the previous example is rectified here.
    Two adjacent elements are wrapped inside a tag <div>

    Inspect the elements.
    You will see an additional div tag in the DOM tree.
*/

import React from 'react'

function FragmentThree() {
    return (
        <div>
            <h1>Computer Science</h1>
            <p>This is a paragraph</p>
        </div>
    )
}

export default FragmentThree
