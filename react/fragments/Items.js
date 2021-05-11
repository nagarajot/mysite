import React from 'react'

function Items() {
    const fruits = [{name:'Apple',price:100},
                    {name:'Orange',price:80},
                    {name:'Banana',price:50},
                    {name:'Grapes',price:40}]
    return (
        <div>
            Items 
            <br />
            {fruits.map(fruit => (
                <p>{fruit.name} - {fruit.price}</p> 
            ))}
        </div>
    )
}

export default Items





