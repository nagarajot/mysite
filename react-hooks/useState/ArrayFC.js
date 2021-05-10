import React, { useState } from 'react'

function ArrayFC() {
    const [ items, setItems ] = useState([])

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value : Math.floor(Math.random() * 100 + 1)
        }])
        console.log(items);
    }

    return (
        <div>
            <h1>ArrayFC</h1>
            <button onClick={addItem}>Add Item</button>
                <ul>
                    {
                       items.map(item => <li key={item.id}>{item.value}</li>)     
                    } 
                </ul>
        </div>
    )
}

export default ArrayFC
