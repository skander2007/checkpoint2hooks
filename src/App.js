
import './App.css';
import { useState } from 'react';
import MoviesList from './components/MoviesList';
import { moviesData } from './data';
import Search from './components/Search';
import AddMovies from './components/AddMovies';

function App() {
 const [movies,setMovies] = useState (moviesData) ;
  const [text, settext] = useState("")
  const [rating, setrating] = useState(1)

  //handle text
  const handleText = (e) => setText(e.target.value);
 
 // adding movies
 const handleAdd = (newMovie) =>setMovies([...movies,newMovie]);
  return (
    <div className="App">
      <Search text={text} handleText={handleText}/>
      <MoviesList    movies={movies.filter(el=>el.name.includes(text))}/>
      <AddMovies add={handleAdd}/>
    </div>
  );
}

export default App;
