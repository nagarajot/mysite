/*
    Replace the div tag with React.Fragment

    The warning in console disappears.
    There is no additional div between tr and td.
*/


import React from 'react'

function Columns1() {
    return (
        <React.Fragment>
            <td>Apple</td>
            <td>100</td>
        </React.Fragment>
    )
}

export default Columns1
