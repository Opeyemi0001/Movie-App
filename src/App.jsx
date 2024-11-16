
import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import AddMovieForm from './components/AddMovieForm';

function App() {
  const [movies, setMovies] = useState(
    [
      {
        title: "",
        description: "",
        posterURL: "",
        rating:"",
      }
    ]
  );
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <>
      <div>
        <Filter onTitleChange={setFilterTitle} onRatingChange={setFilterRating} />
        <AddMovieForm onAddMovie={handleAddMovie} />
        <MovieList movies={filteredMovies} />

      </div>
    </>
  )
}

export default App
