/*
    key is used in map
    no warning in console
    key={mov.id}

    we can also use any unique column.
    we can also use title, since it is unique
    key={mov.title}
*/

import React from 'react'

import Movie from './Movie'

function ListMoviesFC() {
    const movies = [
        { id: 101, title: 'Sholey', year: 1975 },
        { id: 102, title: 'Beta', year: 1980 },
        { id: 103, title: 'Silsila', year: 1976 },
        { id: 104, title: 'Bobby', year: 1972 },
        { id: 105, title: 'Karz', year: 1981 }
    ]

    const moviesList = movies.map(movie => <Movie key={movie.id} mov={movie} />)

    return (
        <div>
            { moviesList }
        </div>
    )
}

export default ListMoviesFC
