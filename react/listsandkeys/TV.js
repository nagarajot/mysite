import React from 'react'

function TV({tv, key}) {
    return (
        <div>
            <h1>{tv.name} - {key}</h1>
        </div>
    )
}

export default TV
