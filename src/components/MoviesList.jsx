import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = ({movies}) => {
  return (
    <div className="movie-list">
        {movies.map(el =>
            <MoviesCard movie={el}/>  )}
    </div>
  )
}

export default MoviesList