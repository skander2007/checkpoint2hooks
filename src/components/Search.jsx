import React from 'react'
import StarRating from './StarRating'

const Search = ({text,handleText}) => {
  return (
    <div className="header-container">
        <h1>Our movie app</h1>
        <div  className="sarch-container">
            <input className="input" type="text" value={text} onChange={handleText}/>
            <StarRating/>
        </div>
    </div>
  )
}

export default Search