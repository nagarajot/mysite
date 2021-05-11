/*
    Replace div with table tag.

    Call Columns component, which has details about columns.
    Apple  100
*/

import React from 'react'

import Columns from './Columns'
import Columns1 from './Columns1'
import Columns2 from './Columns2'

function Tables() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns2 />
                </tr>

            </tbody>
            
        </table>
    )
}

export default Tables
