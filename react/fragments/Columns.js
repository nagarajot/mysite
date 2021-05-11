/*
    div has tds inside
    You will get the output
    Console gives warning - <div> cannot appear as a child of <tr>.

    During inspect element we got
    <tbody>
        <tr>
            <div>
                 <td>Apple</td>
                 <td>100</td>
            </div>
        </tr>
    </tbody>


    Div tag was necessary in this coponent, because
    we wanted to output 2 tds.
*/

import React from 'react'

function Columns() {
    return (
        <div>
            <td>Apple</td>
            <td>100</td>
        </div>
    )
}

export default Columns
