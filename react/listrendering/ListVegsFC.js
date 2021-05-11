import React from 'react'

function ListVegsFC() {

    const vegs = [ "Onion", "Potato", "Tomato", "Cucumber", "Cabbage"]
    return (
        <div>
            <h1>VegsFC</h1>
            {
                vegs.map(veg => 
                    <h1>{veg}</h1>
                )
            }
            
        </div>
    )
}

export default ListVegsFC
