import React from 'react'

function Movie({mov}) {
    return (
        <div>
            <h1>{mov.title} - {mov.year}</h1>
        </div>
    )
}

export default Movie
