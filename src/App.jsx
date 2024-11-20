
import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import MovieList from './components/MovieList'
import AddMovieForm from './components/AddMovieForm';
import { Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard';

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
  const [filters, setFilters] = useState({title:"", rating: 0});

  const handleApplyFilters = ({title, rating}) => {
    setFilters({filters, rating});
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      movie.rating >= filters.rating
  );

  return (
    <>
      <div className='container'>
        <Filter onApplyFilter={handleApplyFilters} />
        <AddMovieForm onAddMovie={handleAddMovie} />
        <MovieList movies={filteredMovies} />
        <Routes>
          <Route path='/movie/:id' element={MovieCard} />
        </Routes>

      </div>
    </>
  )
}

export default App
