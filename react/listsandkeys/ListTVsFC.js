/*
Warning: TV: `key` is not a prop. 
Trying to access it will result in `undefined` being returned. 
If you need to access the same value within the child component, 
you should pass it as a different prop.
*/

import React from 'react'

import TV from './TV'

function ListTVsFC() {

    const TVs = [
        { id: 1, name: 'Sony', price:30000 },
        { id: 2, name: 'Samsumg', price: 32000},
        { id: 3, name: 'LG', price: 24000 }
    ]

    const TVsList = TVs.map(tv => <TV key={tv.id} tv={tv} />)
    return (
        <div>
            { TVsList }
        </div>
    )
}

export default ListTVsFC
