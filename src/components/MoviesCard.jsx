import React from 'react'
import StarRating from './StarRating'

const MoviesCard = ({movie}) => {
  return (
    <div className="movie-card">
        <StarRating rating={movie.rating}/>
        <img src={movie.Image} alt="" />
        <p> {movie.date}</p>

    </div>
  )
}

export default MoviesCard